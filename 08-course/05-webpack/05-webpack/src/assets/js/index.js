console.log("第一次用webpack");
import 'lodash'
// import config from './config.js'
// console.log(config);
import "../styles/test.less";
import "../images/ABC.jpg";

console.log(sceneParam); //  dev/prod/test
console.log(configCommon["default"]["environment"][sceneParam]);
// debugger

console.log("-----");
//模拟网页皮肤
if (sceneParam == "prod") {
  //import('styles/main.less');
} else if (sceneParam == "dev") {
  // import('styles/test.less');
}

document.addEventListener("click", () => {
  //预先拉取
  import("./click.js"
    /* webpackPrefetch:true */
  ).then(({ default: func }) => {
    //then里面得参数是一个Module对象有个defalult属性
    func();
  });
});

const arr = [new Promise(() => {}), new Promise(() => {})];
arr.map((item) => {
  console.log(item);
});
var isCol = ["11", "22"].includes("11");
console.log(isCol);
