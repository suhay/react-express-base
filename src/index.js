const express = require('express')
const http = require('http')
const path = require('path')

const app = express()

if (process.env.NODE_ENV === 'development') {
  (() => {
    const webpack = require('webpack')
    const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../webpack.config')
    const compiler = webpack(webpackConfig)

    app.use(require('webpack-dev-middleware')(compiler, {
      logLevel: 'warn', publicPath: webpackConfig.output.publicPath,
    }))

    app.use(require('webpack-hot-middleware')(compiler, {
      log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
    }))
  })()
}

app.use(express.static(path.resolve('./public')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'))
})

const server = http.createServer(app)

server.listen(process.env.PORT || 3000, () => {
  console.log('Listening on %j', server.address())
})
