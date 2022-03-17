<template>
  <div>
    <h2>我是home页</h2>
    <p>获得的参数=--{{params}}</p>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
   </el-row> 
  </div>
</template>

<script>
export default {
     data() {
       return {
         name:'tome',
         //获取到name的参数
         params:this.$route.query
       }
     },
     mounted() {
       
     },
}
</script>

<style>

</style>