import { createApp } from "vue";
import App from "./app.vue";
//console.log(createApp);
import router from "./router/index";

// import Vue from 'vue/dist/vue.esm.js'
// var app = createApp({
//   el:'#appDom',
//   data() {
//     return {
//       message: '冬奥会加油',
//       test:'test000001'
//     }
//   },
//   template: '<div>{{message}}</div>',
//    render: h => h(App)
// })
// createApp(App).use(router).mount('#appDOm')
const app = createApp(App);
app.use(router);
app.mount("#appDom");
