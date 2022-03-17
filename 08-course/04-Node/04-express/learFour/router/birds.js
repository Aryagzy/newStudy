var express = require('express')
var router = express.Router(); //可挂载路由处理程序

//路由器的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time:', Date.now());
  next()
})
//首页路由
router.get('/home', function (req, res) {
  res.json({
    home:'Birds home page'
  })
})
// 关于我们
router.get('/about', function (req, res) {
  res.json({
    about:'About birds'
  })
})
//向外dao'chu
module.exports = router;