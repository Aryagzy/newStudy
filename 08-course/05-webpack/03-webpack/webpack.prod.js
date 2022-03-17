const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const commonConfig = require("./webpack.common.js");
var DIST_PATH = path.resolve(__dirname, "./dist");
// console.log(merge);
module.exports = merge(commonConfig, {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释
      // `...`,
      //压缩css插件
      new CssMinimizerPlugin(),
    ],
  },

  output: {
    path: DIST_PATH, // 创建的bundle生成到哪里
    // 多文件的时候，需要修改output输出文件里的动态配置文件为[name]
    filename: "[name].[chunkhash:5].js", // 创建的bundle的名称
  },
  //模块解析
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          // { loader: "style-loader" },这样写会把css样式嵌入到html中得css里面去
          { loader: MiniCssExtractPlugin.loader }, //把css样式抽取出来
          { loader: "css-loader" },
          { loader: "postcss-loader" }, //配置
          { loader: "less-loader" },
        ], //方式一
        //use: ['style-loader', 'css-loader', 'less-loader'] //方式二
      },
    ],
  },
  // 设置 Webpack 的 mode 模式
  // 生产环境下需要的相关插件配置
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash:8].css",
      chunkFilename: "styles/[id].[contenthash:8].css",
    }),
    
  ],
});
