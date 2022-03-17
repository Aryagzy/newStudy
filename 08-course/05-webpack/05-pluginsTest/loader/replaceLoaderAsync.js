const loaderUtils = require("loader-utils");
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  console.log(options);
  //定义一个异步处理，告诉webpack,这个loader里面有异步事件，在里面调用这个异步事件
  const callback = this.async();
  //异步
  setTimeout(() => {
    // console.log(source);
    // console.log(this);
    // console.log(this.query);
    // var options = this.query;
    //通过this.query来接受配置文件传递进来的参数;
    //return source.replace(/webpack/g, "胖胖");

    const result = source.replace(/hello/g, options.name);
    callback(null, result); //官方
    //this.callback(null, result);
  }, 100);
};
