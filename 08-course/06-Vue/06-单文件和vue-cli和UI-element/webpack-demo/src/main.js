import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import VueRouter from "../router/index";

Vue.use(ElementUI);
//templat模式
//有template形似，就不会执行html中的代码
// new Vue({
//   el: "#app",
//   data() {
//     return {
//       hello: "hello world",
//       msg: "msg world",
//     };
//   },
//   // template:`<div id="app1">{{msg}}</div>`
//   components: { App }, //注册全局组件
//   template: "<App/>",
// });

//render
new Vue({
  el: "#app",
  router: VueRouter, //注入路由
  data() {
    return {
      hello: "hello world",
      msg: "msg world",
    };
  },
  // render(createElement) {
  //   return createElement('div', {
  //     id:'app1'
  //   }, [
  //     createElement('h1','oooo')
  //   ])
  // }
  //使用组件，利用render函数渲染
  // render(h) {
  //   return h(App);
  // },
  //es6写法
  render: (h) => h(App),
});
