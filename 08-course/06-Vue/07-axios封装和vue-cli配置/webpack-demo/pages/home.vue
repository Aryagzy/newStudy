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
 import axios from "axios"
export default {
 
      data(){
        return {
            name:'laney',
            params:this.$route.query,
            infoData:{}
        }
    },
    methods:{
        getInfoList(){
            var token = localStorage.getItem('token');
            var test = {name:'laney',age:'20'}
            //var mn = Qs.stringify(test);
            // axios.post('http://localhost:8081/api/info',mn).then((res)=>{
            //     console.log('test kkkk-----------');
            // })
             axios({
                method:'post',
                url:'http://localhost:8081/api/info',
                data:test,
                headers:{
                    token:token
                }
            }).then((res)=>{
              console.log(res);
                if(res.data.statusCode==200) {     
                     this.infoData = res.data.result;
                     var tag = res.data.tag;
                     return axios({
                            method:'post',
                            url:'http://localhost:8081/api/msg'
                        })
                } else {
                     alert(res.data.result);
                }
            }).then((res)=>{
              console.log(res);
                console.log(res.data.result)
            });
        }
    },
    mounted(){
        this.getInfoList();
    }
}
</script>

<style>

</style>