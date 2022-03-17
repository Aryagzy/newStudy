const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
var DIST_PATH = path.resolve(__dirname, "./dist");
console.log(merge);
module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    path: DIST_PATH, // 创建的bundle生成到哪里
    // 多文件的时候，需要修改output输出文件里的动态配置文件为[name]
    filename: "[name].[chunkhash:5].js", // 创建的bundle的名称
  },
  // 设置 Webpack 的 mode 模式
  // 生产环境下需要的相关插件配置
  plugins: [],
});
