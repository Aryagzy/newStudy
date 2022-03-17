var connect = require("connect");
var bodyParser = require("body-parser"); //body解析
var cors = require('cors'); 
var app = connect();

//静态文件处理中间件，设置root路径作为静态文件服务器
//静态资源的获取，需要安装serve-static
var serveStatic = require('serve-static')


function logger(req, res, next) {
  console.log(req.method + " " + req.url);
  next(); //执行下一个中间件
}
function hello(req, res,) {
  res.setHeader("Content-type", "text/plain");
  res.end("hello world");
}
app
  .use(function (req, res, next) {
    //跨域处理
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*"); //允许任何源
    // Request methods you wish to allow
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    ); //允许任何方法
    // Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "*"); //允许任何类型
    //utf-8转码
    next(); //next 方法就是一个递归调用
  })
  .use(logger)
  .use(serveStatic(__dirname))
  .use(hello)
  .use(function (req, res, next) {
    console.log(req.body); //undefined
     next();
  })
  //解析application/json，最后保存的数据都放在req.body对象上
  .use(bodyParser.json()) //JSON解析
  .use(function (req, res, next) {
    console.log(req.body); //有数据
    next()
  })
  .use("/info", function (req, res, next) {
    //response 响应 request请求
    // 中间件
    // var queryres =  getParams(req);

    //需要使用getParamsMiddle中间件
    res.end(JSON.stringify(req.query));
    var data = {
      code: "200",
      msg: "success",
      result: [
        {
          id: 1,
          name: "sonia",
          content: "广告投放1----",
        },
        {
          id: 2,
          name: "ben",
          content: "广告投放2",
        },
        {
          id: 3,
          name: "lili",
          content: "广告投放3",
        },
      ],
    };
    res.end(JSON.stringify(data));
    next();
  })
  .listen(3000);
