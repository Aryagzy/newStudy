// 拿到入口文件的源码，替换掉里面的字符串
const loaderUtils = require("loader-utils");
module.exports = function (source) {
  console.log(source);
  // console.log(this);
  //同步方式
  //方式一
  // console.log(this.query);
   var options = this.query;
  //通过this.query来接受配置文件传递进来的参数
   return source.replace(/webpack/g, options.name);

  //return source.replace('webpack', options.name);

  //方式二
  // const options = loaderUtils.getOptions(this);
  // console.log(options);
  // return source.replace("hello", options.name);

  //方式三
  // const options = loaderUtils.getOptions(this);
  // const result = source.replace(/webpack/g, options.name);
  // this.callback(null, result);
};
