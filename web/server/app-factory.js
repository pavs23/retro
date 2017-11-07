const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackProdConfig = require('../webpack.prod');
const webpackDevConfig = require('../webpack.dev');
const webpackMiddleware = require('webpack-dev-middleware');

const clientPath = '../dist/';

const createProductionApp = (app) => {
  const compiler = webpack(webpackProdConfig);
  compiler.run((err) => { if (err) { throw err; } });
  app.set('env', 'production');
};

const createDevelopmentApp = (app) => {
  app.use(webpackMiddleware(webpack(webpackDevConfig)));
  app.set('env', 'development');
};

const getReactAppForEnvironment = () => {
  const app = express();
  app.use(express.static(path.join(__dirname, clientPath)));

  switch (process.env.NODE_ENV) {
    case 'production':
      createProductionApp(app);
      break;
    case 'development':
      createDevelopmentApp(app);
      break;
    default:
      throw new Error('Could not determine environment from node env variable.');
  }

  app.use((req, res) => {
    const indexPath = path.join(__dirname, clientPath, 'index.html');
    res.sendFile(indexPath);
  });

  return app;
};

module.exports.getReactAppForEnvironment = getReactAppForEnvironment;
