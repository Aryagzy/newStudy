const webpack = require("webpack");
const path = require("path");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const DIST_PATH = path.resolve(__dirname, "./dist/");
module.exports = merge(commonConfig, {
  mode: "development", // 设置 Webpack 的 mode 模式
  output: {
    path: DIST_PATH, // 创建的bundle生成到哪里
    // 多文件的时候，需要修改output输出文件里的动态配置文件为[name]
    filename: "[name].js", // 创建的bundle的名称
  },
  // 开发环境下需要的相关插件配置
  plugins: [],
  // 开发服务器
  devServer: {
    hot: true, // 热更新，无需手动刷新
    //contentBase: DIST_PATH, //热启动文件所指向的文件路径
    host: "0.0.0.0", // host地址
    port: 8080, // 服务器端口
    historyApiFallback: true, // 该选项的作用所用404都连接到index.html
    proxy: {
      "/api": "http://localhost:3000",
      // 代理到后端的服务地址，会拦截所有以api开头的请求地址
    },
      // open: true,
    //  noInfo: true,
    //  useLocalIp:true
  },
});
