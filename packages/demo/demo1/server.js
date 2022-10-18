const webpack = require('../../webpack')
// eslint-disable-next-line node/no-unpublished-require
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('./webpack.config')

const compiler = webpack(webpackConfig)
const devServerOptions= {
  ...webpackConfig.devServer,
  open: true
}
const server = new WebpackDevServer(devServerOptions, compiler)

const runServer = async () => {
  console.log('start server');
  await server.start()
}

runServer()
