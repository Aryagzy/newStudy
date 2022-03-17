<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <div>
      <!-- <router-link to="/home" tag="li">主页</router-link>
      <router-link to="/news" tag="li">新闻</router-link> -->
      <router-link to="/login">登录</router-link>

      <ul @click="gotoPage($event)">
        <li tag="home">主页</li>
        <li tag="news">新闻</li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
export default {
 
    name:'app',//组件的名字
    data() {
      return {
        msg:'hahahaha'
      }
    },
    methods: {
      
      getInfo(){
          axios.get('https://api.github.com/users/fly39244080').then((res)=>{
                    console.log(res);
                })
          },
      gotoPage(ev){
        var target = ev.target;//可以获取到鼠标点击的DOM元素
        //console.log(target);
        var tag = target.getAttribute("tag");
        console.log(tag);
        switch (tag) {
          case 'home':
            this.$router.push({
              //这种方式就是可以可以跳转路由
              //相当于get方法
              path: '/home',
              query: {
                name:'myhome'
              }
            })
            break;
             case 'news':
            this.$router.push({
              path: '/news',
              query: {
                name:'mynews'
              }
            })
            break;
        }

      }
    },
}
</script>

<style>

</style>