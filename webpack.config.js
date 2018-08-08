var path = require("path");

module.exports = {
  entry: './app/assets/application.coffee',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/assets/",
    filename: 'application.js'
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
      }
    ]
  }
}
