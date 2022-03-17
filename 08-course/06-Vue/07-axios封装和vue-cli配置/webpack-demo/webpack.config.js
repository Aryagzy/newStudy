//插件安装以后要进行配置
//入口文件
var path = require("path");
var webpack = require("webpack");
var SRC_PATH = path.resolve(__dirname, "./src");
var DIST_PATH = path.resolve(__dirname, "./dist");
var VueLoaderPlugin = require("vue-loader/lib/plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  //配置入口文件
  entry: SRC_PATH + "/main.js",
  //配置入口文件输出的位置
  output: {
    path: DIST_PATH, //项目根目录
    filename: "[name].js",
  },
  resolve: {
    //别名
    alias: {
      //vue/dist/vue.esm.js引入这个的目的是可以使用es6模块
      //默认是vue.runtime.esm.js
      // vue$: "vue/dist/vue.esm.js",
    },
    extensions: [".js", "*", ".vue", ".json"],
  },
  //配置模块加载器
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/, //所有以.js结尾的文件都是由babel-loader加载
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  //开发服务器
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
  //插件
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      filename: path.resolve(DIST_PATH, "index.html"), //打包后的文件名
      title: "树鱼虚拟充值生态服务平台", //打包后的页面 title
      template: path.resolve(__dirname, "index.html"), //打包的模板文件
      inject: true,
      hash: true,
      favicon: path.resolve(__dirname, "favicon.ico"),
    }),
    new webpack.DefinePlugin({
      'sceneParam': JSON.stringify(process.env.scene),
      'laney': JSON.stringify("laney"),
      'test': '"kkkkk"',
    }),
  ],
};
