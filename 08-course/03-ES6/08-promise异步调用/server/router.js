// 这里面写express相关的内容
const express = require("express");
const app = express();
const Tool = require("./tool");

// 获取三国演义里面的人物
// 模仿数据库接口
app.get("/name", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*"); //解决跨域问题
  res.json({
    status: 200,
    data: Tool.name,
  });
});
// 获取兵器的名字根据id
app.get("/wepon", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.query);//获取id
  const id = req.query.id;
  const arr = Tool.wepon.filter((v) => {
    return v.id == id;
  });
  res.json({
    status: 200,
    data: arr,
  });
});
app.listen(2000, () => {
  console.log("2000端口监听中！");
});
