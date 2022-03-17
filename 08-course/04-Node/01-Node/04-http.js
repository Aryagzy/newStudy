const http = require("http"); //引入
const fs = require("fs");
// request
// response
http
  .createServer(function (request, response) {
    const { url, method, headers } = request;
    console.log(method);
		response.setHeader("Access-Control-Allow-Origin", "*");
		/* 星号表示所有的域都可以接受， */
		response.setHeader("Access-Control-Allow-Methods", "GET,POST");//解决跨域问题

    if (url == "/" && method == "GET") {
      fs.readFile("index.html", (err, data) => {
        if (err) {
          response.end("服务器错误");
          return;
        }
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html");//指定文件类型
        response.end(data);
      });
    }else if (url == "/users" && method === "GET") {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.end(JSON.stringify({ name: "lili" }));
    } else if (url == "/list" && method === "GET") {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      response.end(JSON.stringify({ name: "haha" }));
    } else {
      response.end("error requet path");
    }
  })
  .listen(3300, function () {
    console.log("3300端口监听中");
  });

// const routers = []
// routers.length({
//   path: '',
//   method: '',
//   fn() {

//   }
// })
