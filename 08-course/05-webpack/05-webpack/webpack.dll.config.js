var path = require("path");
var webpack = require("webpack");
module.exports = {
  //要打包的模块数组
  entry: {
    //项目中用到的依赖库文件
    vender: ["vue-router", "vuex"],
    asset: ["axios", "echarts"],
  },
  output: {
    path: path.join(__dirname, "./static/dll"), //打包后文件输出的位置
    //vender.dll.js
    filename: "[name].dll.js",
    library: "[name]_library", //与webpack.DllPlugin中的`name:'[name]_libarry'`保持一致
    /* 
      存放相关的dll文件的全局变量的名称，比如对于assets来说的话就是asset_library,在后面加_library
      是为了防止全局变量污染
     */
  },
  plugins: [
    //webpack.DllPlugin这个插件的作用就是生成mainfest.json文件的
    /* 
       DllPlugin插件有三个配置项参数：
       content(可选)：mainfest文件中请求的上下文，默认为该webpack文件的上下文
       name:公开的dll函数名称，和output.library保持一致
       path:manifest.json生成文件的位置和文件的名称
     */
    new webpack.DllPlugin({
      path: path.join(__dirname, "./static/dll/[name]-manifest.json"),
      name: "[name]_library", //这里的名字必须和output.library保持一致
      context: __dirname,
    }),
  ],
};
