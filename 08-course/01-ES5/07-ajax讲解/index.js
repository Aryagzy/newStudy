var connect = require('connect');//创建连接
var bodyParser = require('body-parser');//body解析
var cookieParser = require('cookie-parser');
var cors = require('cors');
const url = require('url');
const qs = require('path');
const path = require('path');
const formidable = require('formidable');

function getParams(req) {
    //判断是什么请求
    var query = {};
    if (req.method.toLocaleLowerCase() == "post") {
            query = req.body;
    }else {
         const urlJson = url.parse(req.url);
         query = qs.parse(urlJson.query);
    }    
     return query;
}
var app = connect();

 app.use(bodyParser.json())//JSON解析
    .use(bodyParser.urlencoded({ extended: true }))
    //.use(cookieParser()) 有错误
    // .use(cors())
    .use(function (req, res, next) {
        //跨域处理
        //website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');//允许任何源
        //Request methods you[wish to allow
        res.setHeader('Access-Control-Allow-Methods ', 'GET，POST,OPTIONS，PUT')
        //Request headers you wish to allow
        res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested")
        res.setHeader('Access-Control-Allow-Headers', '*'); //允许任何类型
        res.writeHead(200, { "Content-Type": "text/plain;charset=utf-8" }); 
        next(); // next方法就是一个递归调用
    })
   
  
    // .use('/upload/img ', function (req, res, next) {
    //     var form = new formidable.IncomingForm();
    //     form.encoding = 'utf-8';
    //     form.uploadDir = path.join(__dirname, './static');
    //     form.keepExtensions = true;
    //     form.parse(req, function (err, fields, files) {
    //         console.log(files)
    //         if (err) {
    //             return;
    //         };
    //         var size = parseInt(files.uploadImg.size);
    //         if (size > 1024 * 1024) {
    //             res.send("图片过大!")
    //             fs.unlink(files.uploadImg.path);
    //             return;
    //         };
    //         res.end(" upload success");
    //         next();
    //     });
    // })
    //jsonp
    //jsonp
    // .use('/jsonp/callback=:cbk " ,function(req,res,next){
    //          console.log( " ooopp heelo');
    //          var bk = req.params.cbk;
    //          var vt= {name: "Tim" ,age : 28,id:bk};
    //          res.send(bk+' ( '+JSON.stringify(vt)+')');
    //          next();
    // })
    // //get
    // .use(' /info', function (req, res, next) {
    // //response响应request请求
    // //中间件
    // console.1og('info ------- info ');
    //     var queryres = getParams(req);
    //     console.log(queryres);
    //     console.log("===============");
    //     console.log(req.method + ' ' + req.ur1);
    //     console.log(req.originalUr1, req.ur1);
    
    //     //Cookies that have not been signed
    //     //console.dir( ' Cookies: ', req.cookies)
    //     //Cookies that have been signed
    //     //console.log( 'Signed Cookies: ', req.signedCookies)
    
    // })


//    var data={
//         "code" : "200",
//         "msg": "success",
//        "result": [{
//            "id": 1,
//            "name": "laney",
//            "content": "test01"
//        },
//        {
//            "id": 2,
//            "name": "ben",
//            " content": "test02"
//        },

//        {
//            "id": 3,
//            "name": "lili",
//            "content": "test03"
//       },
//        res.end(JSON.stringify(data));
//        next();

//测试post
// .use( ' /msg/list' ,function(req,res, next){ 
//         var queryres =  getParams(req);
//         console.log(queryres);
//queryres = {
//     name : 'laney ',
//     age: ' 1ee'
//}
    // var data = {
    //     "code": "200",
    //     "msg": "success",
    //     "result": [{
    //         "id": 1,
    //         "name": "laney",
    //         "content": "test01"
    //     },
    //     {
    //         "id": 2,
    //         "name": "ben",
    //         " content": "test02"
    //     },

    //     {
    //         "id": 3,
    //         "name": "lili",
    //         "content": "test03"
    //     }]
    //     }
    //        res.end(JSON.stringify(data));
//        next();
//})
//.use( ' /msg/list/hello' ,function(req,res, next){
    // var data = {
    //     "code": "200",
    //     "msg": "success",
    //     "result": [{
    //         "id": 1,
    //         "name": "laney",
    //         "content": "test01"
    //     }]
    //     }
    //        res.end(JSON.stringify(data));
//        next();
// })
// })
// app . listen(3000);
// console.log( ' Server started on port 3eee.');

