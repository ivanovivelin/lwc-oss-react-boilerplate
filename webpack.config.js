const HtmlWebPackPlugin = require("html-webpack-plugin");
const LwcWebpackPlugin = require("lwc-webpack-plugin");
const path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    fallback: "./src/index.js",
  },
  output: {
    path: path.resolve("dist"),
    filename: "./[name].js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: [
         path.resolve(__dirname, 'src/client'),
         ],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "src/index.html",
      filename: "./index.html",
      title: "fallback",
      chunks: ["fallback"],
    }),
    new LwcWebpackPlugin({
      namespace: {
        // LWC namespace with path
        my: path.resolve("./src/client/modules/my"),
      },
      modules: [{ dir: "src/client/modules" }],
    }),
  ],
};
