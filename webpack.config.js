const path = require('path'); 

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    publicPath: '/build/',
    contentBase: path.resolve(__dirname, 'client/signup.html'),
    proxy: {
      "/": "http://localhost:3000"
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, {
        test: /\.css?/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }, 
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
}