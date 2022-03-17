var webpack = require("webpack");
var path = require("path");
var glob = require("glob");

var DIST_PATH = path.resolve(__dirname, "./dist");

//入口文件
var SRC_PATH = path.resolve(__dirname, "./src");
var newEntries = {};
// key:value
// index: "./src/index.js",
//  main: "./src/main.js",

// path.join(SRC_PATH,'js/*.js')
// SRC_PATH+'/js/*.js

// var files = glob.sync(path.join(SRC_PATH,'/*.js')); // 方式一
var files = glob.sync(SRC_PATH + "/*.js"); //方式二
files.forEach(function (file, index) {
  //    var substr =  file.split('/').pop().split('.')[0];
  var substr = file.match(/src\/(\S*)\.js/)[1];
  // [\s]--表示只要出现空白就匹配
  // [\S]--表示非空白就匹配
  newEntries[substr] = file; //key :value
});

// 声明/dist的路径 为成绝对路径
module.exports = {
  // 入口JS路径
  // 指示Webpack应该使用哪个模块，来作为构建其内部依赖图的开始
  // entry: path.resolve(__dirname, "./src/index.js"),
  // 支持单文件，多文件打包
  // entry: './src/index.js',   //方式一
  //方式二会把所有的js文件打包成一个js文件
  // entry: ['./src/index.js','./src/main.js'], //方法二
  //方式三会把每个js文件分别打包

  entry: newEntries, //数组的形式

  // 编译输出的JS入路径
  // 告诉Webpack在哪里输出它所创建的bundle，以及如何命名这些文件
  output: {
    path: DIST_PATH, // 创建的bundle生成到哪里
    // 多文件的时候，需要修改output输出文件里的动态配置文件为[name]
    filename: "[name].[chunkhash:5].js", // 创建的bundle的名称
  },
  // 模块解析
  module: {},
  // 插件
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
    //  open: true,
    //  noInfo: true,
    //  useLocalIp:true
  },
};
