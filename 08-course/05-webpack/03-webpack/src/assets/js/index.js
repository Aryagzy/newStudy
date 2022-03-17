console.log("第一次用webpack");
import "styles/test.less";
import  "images/ABC.jpg";

console.log(sceneParam);//undefined
debugger

console.log('-----');
//模拟网页皮肤
if (sceneParam == 'prod') {
   //import('styles/main.less');

} else if (sceneParam == 'dev') {
  // import('styles/test.less');

}

document.addEventListener("DOMContentLoaded", () => {
  const h1Ele = document.createElement("h1");
  document.body.append(h1Ele);
  h1Ele.innerText = "Hello Webpack (^_^)";
  h1Ele.style.color = "pink";
});

const arr = [new Promise(() => {}), new Promise(() => {})];
arr.map((item) => {
  console.log(item);
});
var isCol = ["11", "22"].includes("11");
console.log(isCol);
