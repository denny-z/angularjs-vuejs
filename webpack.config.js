var path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: './app/assets/application.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/assets/",
    filename: 'application.js'
  },
  devServer: {
    contentBase: './build',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        use: [ 'coffee-loader' ]
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { plugins: ['transform-vue-jsx'] }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
