// native code
//必须服务端也是ws包发起
var websocket = new WebSocket("ws://localhost:8181");
// 监听ws连接
websocket.addEventListener("open", function (evt) {
  console.log(" Connection to server opened");
  // websocket.send('oooo');
});
// 监听send消息,获取后端发来的信息，message用来接受后端发送来的消息
websocket.onmessage = function (evt) {
  // console.log(evt.data);
  // console.log(evt);
  var endData = JSON.parse(evt.data);
  console.log(evt.data);
  console.log(endData.name);
  console.log("Received data from " + endData.name + ":" + evt.data);

  //将后端传递进来的数据传入这个方法中，展示在div中
  showMessage(endData);
};
// 监听ws错误信息
websocket.addEventListener("error", function (evt) {
  console.log("websocket error.");
});
// ws关闭
websocket.addEventListener("close", function (evt) {
  console.log("websocket close.");
});

function showMessage(data) {
  var txtConsole = document.getElementById("txtConsole");
  var str = `<div class="show-message ${
    data.name == "laney" ? "left" : "right"
  }">
            <span class="name">${data.name}说:</span>
            <span class="info">${data.info}</span>
        </div>`;

  txtConsole.innerHTML += str;
}
