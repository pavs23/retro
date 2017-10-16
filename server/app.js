const path = require("path")
const express = require("express")
const app = express()
const webpack = require("webpack")
const clientPath = '../dist/'
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, clientPath)))

if (process.env.NODE_ENV === "development") {

  const webpackDevConfig = require("../webpack.dev")
  const webpackMiddleware = require("webpack-dev-middleware")  
  app.use(webpackMiddleware(webpack(webpackDevConfig)))
  console.log("running app in development environment")

} else if (process.env.NODE_ENV === "production") {
  
  const webpackProdConfig = require("../webpack.prod")
  const compiler = webpack(webpackProdConfig)
  compiler.run((err, stats) => {
    console.log(stats)
  })
  console.log("running app in production environment")
}

app.get('*', function(req, res) {
  const indexPath = path.join(__dirname, clientPath, 'index.html')
  res.sendFile(indexPath)
})

console.log("Now listening on " + port)
app.listen(port)
