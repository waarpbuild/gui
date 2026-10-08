const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "waarpbuild.js",
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: "asset/resource"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".json"]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "public")
    },
    port: 3000,
    hot: true,
    open: true
  }
};