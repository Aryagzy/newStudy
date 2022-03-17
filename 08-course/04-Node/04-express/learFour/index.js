const express = require("express");
const cors = require("cors");
const path = require("path"); //内置函数无需下载
const app = express();
var birds = require("./router/birds.js");
//6.解决跨域问题---两种方式
/* 自己封装跨域中间件 */
/* app.use("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //这个表示任意域名都可以访问，这样写不能携带cookie了。
  //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS"); //设置方法
  if (req.method == "OPTIONS") {
    res.send(200); // 意思是，在正常的请求之前，会发送一个验证，是否可以请求。
  } else {
    next();
  }
}); */
//使用cors跨域中间件---使用之前要安装cors
app.use(cors());

//1.app.method(path,hander)
//method：post get delete put
//path:路由
//hander:匹配到路由时，执行函数

//5.express-static托管静态资源文件
//Express在静态目录中查找文件，因此，存放静态文件的目录名不会出现在url中
//如果要使用多个静态资源目录，请多次调用 express-static 中间件函数
//访问接口是,直接访问资源文件名字就可以 http://localhost:3003/index.html
//注意：如果两个静态文件中有2个同名的文件，以第一个为主
app.use(express.static("public"));
app.use(express.static("public2"));

//6.静态函数，为静态目录指定一个挂载路径，如下所示
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use("/html", express.static(path.join(__dirname, "public2")));
//访问的链接：http://localhost:3003/html/index.html
app.use("/info", function (req, res, next) {
  //response 响应   request请求
  // 中间件
  var queryres = getParams(req);
  //需要使用getParamsMiddle中间件
  // res.end(JSON.stringify(req.query));

  console.log(queryres);
  console.log("========================");
  console.log(req.method + " " + req.url);
  console.log(req.originalUrl, req.url);

  //          // Cookies that have not been signed
  //          console.dir('Cookies: ', req.cookies)
  //
  //          // Cookies that have been signed
  //          console.log('Signed Cookies: ', req.signedCookies)

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
});

// app.get("/", (req, res) => {
//   res.send("Welcome Express");
// });
// app.post("/info", (req, res) => {
//   //查数据
//   //res.end--向客户端响应请求
//   res.send("hello post");
// });

//2.next()-执行下一个函数--the response will be sent by the next function
// app.get(
//   "/exmaple/b",
//   function (req, res, next) {
//     console.log("the response will be sent by the next function");
//     next();
//   },
//   function (req, res) {
//     res.send("Response Client");
//   }
// );

//3.app.route()--相同的路由不同的请求
//可以使用app.route()为路由路径创建可链接的路由处理程序
//由于路径是单个位置指定的，因此创建模块化路由有很大帮助，减少冗余和拼写错误也是如此
//同时对/book这个路由请求，可以以不同的方式请求，减少了代码的冗余

//4./birds/home  /birds/about--这样使得代码更加模块化一些-中间件
app.use("/birds", birds);
// app.use('/shop',shop)

app
  .route("/book")
  .get(function (req, res) {
    res.send("Get a random book!");
  })
  .post(function (req, res) {
    res.send("Add a book!");
  })
  .put(function (req, res) {
    res.send("Update the book!");
  });

app.listen(3003, () => {
  console.log("Example app listenting on port 3003!");
});
