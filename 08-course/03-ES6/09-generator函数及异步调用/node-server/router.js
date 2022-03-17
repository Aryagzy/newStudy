const express = require('express')
const app = express()
const Tool = require('./tool')
// 获取三国演义里面人物的
app.get('/name.json',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.json({
        status:200,
        data:Tool.name
    })
})
app.get('/rName.json',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.json({
        status:200,
        data:'rewrite'
    })
})
// 获取兵器的名字根据id
app.get('/wepon.json',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    const id = req.query.id
    const arr = Tool.wepon.filter((v)=>{
        return v.id == id
    })
    res.json({
        status:200,
        data:arr
    })
})
app.listen(2000,()=>{console.log('监听2000端口成功');
})