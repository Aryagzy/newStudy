import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Page1 from "../pages/page1.vue";
import Page2 from "../pages/page2.vue";
// console.log(VueRouter);
//使用插件
//createApp().use(VueRouter);// 执行install方法
//创建路由对象
const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/page1",
    name: "page1",
    component: Page1,
    // beforeEnter: (to, from, next) => {
    //   console.log(`beforEnterhome from ${from} to ${to}`);
    //   setTimeout(() => {
    //     next();
    //   }, 1000);
    // },
  },
  {
    path: "/page2",
    name: "page2",
    component: Page2,
  },
];
//创建路由
const router = createRouter({
  history: createWebHashHistory(),
  routes:routes //定义的路由
})

//导出router
export default router;
