/* 
  1.同步文件读取
  2.异步文件的读取
  3.简单文件读取
      -fs.readFile(path,[,options],callback)
      -fs.readFileSync(path,[,options])
          -path  要读取的文件路径
          -options 读取的选项
          -callback  回调函数，通过回调函数将读取到内容返回(err,data)
             err 错误对象
             data 读取到的数据，会返回一个buffer
  4.流式文件读取
 */

var fs = require("fs");

fs.readFile('a.png', function (err, data) {//两个参数
    if (!err) { //读取成功
        // console.log(data)//打印数据 是一个buffer类型的数据
       //将data数据写入文件中
        fs.writeFile('hello5.png', data, function (err) {
            if (!err) {
                console.log('文件写入成功');
            }
        })
        
     }
})