const path = require("path");
//const CopyrightWebpackPlugin = require('./plugin/copyright-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    main: "./index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  //处理Loader路径问题
  // resolveLoader: {
  //   modules:["node_modules","./loader"]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        //添加参数前
        //use:path.resolve(__dirname,'./loader/replaceLoader.js')
        //添加参数，使用resolveLoader之前
        use: [
          {
            loader: path.resolve(__dirname, "./loader/replaceLoader.js"),
            options: {
              name: "冰墩墩",
            },
          },
          {
            loader: path.resolve(__dirname, "./loader/replaceLoaderAsync.js"),
            options: {
              name: "雪蓉荣",
            },
          },
        ],
        //使用resoleLoader之后
        // use: [
        //   {
        //     loader: 'replaceLoader',
        //     options: {
        //       name:'冰墩墩'
        //     }
        //   },
        //   {
        //     loader: 'replaceLoaderAsync',
        //     options: {
        //       name:'雪蓉荣'
        //     }
        //   }
        // ],
      },
    ],
  },
  plugins: [],
};
