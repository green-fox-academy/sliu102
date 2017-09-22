const path = require('path');

module.exports = {
  entry: {
      app: './src/app/index.js',
      fetch: './src/app/fetch.js'
    },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'dist'),
                loader: 'style-loader!css-loader'
            }
        ]
  }
};