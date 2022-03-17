<template>
  <div>
    {{message}}
    <br>
    <!-- 路由链接 -->
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
     <br>
     <transition name="fade" mode="out-in">
       <!-- 路由显示的地方 -->
       <router-view></router-view>
     </transition> 


  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return{
      name:'guo pang pang',
      message: '冬奥会加油',
    }
  }

}
</script>

<style>

</style>