var WebSocketServer = require("ws").Server,
  wss = new WebSocketServer({ port: 8181, maxPayload: 5000 }); //maxPayload最大的在线人数

wss.on("connection", function (ws) {
  console.log("client connected");
  //  var timer =null;

  //  function repeatFun(str){
  //       clearInterval(timer);
  //       timer = setInterval(()=>{
  //           var ran = Math.random();
  //           ws.send(10 * ran+str); //向客户端发送数据
  //       },2000);
  //  }
  // repeatFun();

  ws.on("message", function (message) {
    var data = JSON.parse(message)
    console.log("receive:", data); //二进制 JSON字符串
    // repeatFun(message); //将接受的信息传递到reapeat函数中作为参数

    // ws.send(message); //向客户端发送数据

    //如果需要把消息发送到所有用户，需要遍历
    /*
         把消息发送到所有的客户端
         wss.clients获取所有链接的客户端
       */
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(data)); //向每个客户端发送连接
    });
  });
  ws.on("close", function () {
    // clearInterval(timer);
    console.log("服务关闭");
  });
});
