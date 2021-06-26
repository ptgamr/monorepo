const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  mode: "development",
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            babelrc: false,
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
            plugins: [],
          },
        },
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: "url-loader?name=assets/images/[name]-[hash].[ext]&limit=8192",
      },
      {
        test: /\.(woff2?|otf|ttf|eot)$/,
        use: "file-loader?name=assets/fonts/[name]-[hash].[ext]",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
};
