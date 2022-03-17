var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin");
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
    filename: "[name].js", // 创建的bundle的名称
  },
  // 模块解析
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }], //方式一
        //use: ["style-loader", loader: "css-loader" ] //方式二
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" }, //配置
          { loader: "less-loader" },
        ], //方式一
        //use: ['style-loader', 'css-loader', 'less-loader'] //方式二
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        //use 使⽤用⼀一个 loader 可以⽤用对象，字符串串，两个 loader 需要⽤用数组
        use: {
          loader: "url-loader",
          // options 额外的配置，⽐比如资源名称
          options: {
            esModule: false,
            // placeholder 占位符 [name]⽼老老资源模块的名称
            // [ext]⽼老资源模块的后缀
            // https://webpack.js.org/loaders/file-loader#placeholders
            name: "[name]_[hash].[ext]",
            //打包后的存放位置
            outputPath: "images/",
            //小于 2048B，才转换成 base64 的文件打成 Base64 的格式，写入 JS
            limit: 2048,
            publicPath: "/images", //最终生成的 CSS 代码中，图片 URL 前缀
          },
        },
        type: "javascript/auto",
      },
      {
        test: /\.(jsx|js)$/,
        use: {
          loader: "babel-loader",
          options: {
            // presets: ["@babel/preset-env"], //方法一
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  // 插件
  plugins: [
    //插件要先引入然后返回的是函数，直接New一个实例对象
    new htmlWebpackPlugin({
      filename: path.resolve(DIST_PATH, "index.html"), //打包后的文件名
      title: "树鱼虚拟充值生态服务平台", //打包后的页面 title
      template: path.resolve(__dirname, "index.html"), //打包的模板文件
      inject: true,
      hash: true,
      favicon: path.resolve(__dirname, "favicon.ico"),
    }),
  ],
};
