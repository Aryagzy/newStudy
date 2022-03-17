import Vue from "vue";
import VueRouter from "vue-router";
//1.引入组件
import Home from "../pages/home.vue";
import News from "../pages/news.vue";
//import Login from "../pages/login.vue";

Vue.use(VueRouter);
//2.配置路由
var allRoutes = [
  {
    path: "/login",
    name: "login",
    //按需加载
    component: () => import("../pages/login.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
];
//3.实例化路由
export default new VueRouter({
  routes: allRoutes,
  mode: "hash",
  base: "/",
  /**
   * vue-router认为只有路由真正匹配时，才会加上 exact-active-link这个class
   * 如果只有一部分命名重合,就会加上 active=menu
   * fallback
   * 不是所有浏览器都支持前端路由的方式，如果不支持，设置fallback:true
   * vue会自动fallback到hash模式
   */
  fallback: true,
  linkActiveClass: "active-menu",
  linkExactActiveClass: "exact-active-menu",
});
