// 创建一个基本的服务器
import express from 'express'
import userRouter from './router/user_router.js'
const app = express()
app.use('./api',userRouter)
app.listen(80, () => {
  console.log('80端口监听中....')
})