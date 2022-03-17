var express = require('express');
var ejs = require('ejs')
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // 创建用于渲染的数据
  var data = {
    siteName :"guoguo",
    siteUrl: "http://www.guoxiaopang.com",
    title:'测试'
  }
   //方式一
  // 创建模板内容
  // var template =
  //   "<a href='<%=siteUrl%>" +
  //   "<%=siteName%>" +
  //   "</a>";
  //通过ejs.render将数据放到模板中，转为HTML数据
  // let html = ejs.render(template, data);
  //将数据在浏览器中进行展示
  // res.send(html)
 
  //方式二
   res.render('index.ejs', data);
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Index' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
module.exports = router;
