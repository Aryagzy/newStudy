///1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装  response是对响应报文的封装
//all 可以接受任何类型的请求
app.all('/info', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头，自定义的请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //服务端响应json数据
    //响应数据
    const data = {
        data1:{ name: 'guoxiaopang',
                 msg: 'student',
                id: '01'
        },
        data2:{ name: 'lili',
                 msg: 'student',
                id: '02'
        },
        data3:{ name: 'pipi',
                 msg: 'student',
                id: '03'
        }
        
        
     }
    //将对象转化成字符串
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);//send里面只能是字符串或者 Bafer数据
})

app.all('/info-server', (request, response) => {
    // 设置响应头 设置允许跨域node
    response.setHeader('Access-Control-Allow-Origin', '*');
    //对于自定义的请求头 特殊的响应头，自定义的请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    //服务端响应json数据
    //响应数据
    const data = {
                 name: 'popo',
                 msg: 'student',
                 id: '04'
    }
    //将对象转化成字符串
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);//send里面只能是字符串或者 Bafer数据
})
// 4.监听端口启动服务
app.listen(3000, () => {
    console.log("服务已经启动，3000端口监听中.......");
});
