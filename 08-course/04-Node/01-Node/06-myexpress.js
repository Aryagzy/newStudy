const http = require("http");
const url = require("url");
let routers = [];
class Application {
  get(path, hander) {
    routers.push({
      path,
      method: "get",
      hander,
    });
  }
  listen() {
    const server = http.createServer(function (req, res) {
      const { pathname } = url.parse(req.url); //在路径中解析出来pathname
      // console.log(pathname);
      // console.log(req.method.toLowerCase());
      //在路由表routers通过pathname,找到回调，然后执行
      var test = routers.find((v) => {
        //  console.log(v);
        // console.log(v.path);
        // console.log(v.method);
        return v.path == pathname && req.method.toLowerCase() == v.method;
      });
      //  console.log(test);
      // console.log(test.hander);
      // console.log(test.path);
      // var re = test.hander(req, res)
      // // console.log(re);
      // return test.hander(req, res)
      if (test) {
        return test.hander(req, res);
      } 
       return res.end("error path");

      //  return test['hander'](req,res)
    });
    //在Application原型上添加listen方法匹配路径，执行对应的hander
    server.listen(...arguments);
  }
}
module.exports = function () {
  return new Application();
};
