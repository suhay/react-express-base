const path = require('path')

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: {
    index: [
      './browser/index.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.production.js',
    publicPath: '/',
  },
}
