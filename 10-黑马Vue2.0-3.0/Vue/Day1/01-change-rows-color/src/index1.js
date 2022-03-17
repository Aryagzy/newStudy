//1.使用ES6导入语法，导入jQuery
import $ from "jquery";

//2.定义jquery入口函数
$(function () {
  //3.实现奇偶行隔行变色
  $("li:odd").css("background", "red");
  $("li:even").css("background", "green");
});
