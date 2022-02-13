const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 
  {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  output: {
    assetModuleFilename: 'static/images/[name]-[hash][ext]'
  },
  module: {
    rules: [
      
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ]
};
