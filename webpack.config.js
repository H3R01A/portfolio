const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    src: "./client/index.js",
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env", "@babel/react"],
        },
      },
      {
        test: /\.s?css/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "index.html",
    }),
  ],
  devServer: {
    // fallback to root for other urls

    // static: {
    //   publicPath: "/build",
    //   directory: path.resolve(__dirname, "build"),
    // },

    historyApiFallback: true,

    hot: true,

    proxy: {
      "/api": "http://localhost:3000",
    },
  },
};
