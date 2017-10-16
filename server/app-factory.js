const path = require("path")
const express = require("express")
const webpack = require("webpack")
const clientPath = '../dist/'

const getAppFromEnvironment = () => {

  const app = express()
  app.use(express.static(path.join(__dirname, clientPath)))  

  switch(process.env.NODE_ENV) {
    case "production":
      createProductionApp(app)
      break
    case "development":
      createDevelopmentApp(app)
      break
    default:
      console.log("Could not determine environment from node env variable.")
  }

  app.get('*', function(req, res) {
    const indexPath = path.join(__dirname, clientPath, 'index.html')
    res.sendFile(indexPath)
  })

  return app
}

const createProductionApp = (app) => {
  const webpackProdConfig = require("../webpack.prod")
  const compiler = webpack(webpackProdConfig)
  compiler.run((err, stats) => {
    console.log(stats)
  })
  app.set('env', 'production')
}

const createDevelopmentApp = (app) => {
  const webpackDevConfig = require("../webpack.dev")
  const webpackMiddleware = require("webpack-dev-middleware")  
  app.use(webpackMiddleware(webpack(webpackDevConfig)))
  app.set('env', 'development')
}

module.exports.getAppFromEnvironment = getAppFromEnvironment