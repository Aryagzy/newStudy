/* 
   简单文件写入：
      fs.writeFile(file,data[,options],callback)
      fs.writeFileSync(file,data[,options])
         -file 要操作的文件路径
          -data  要写入的数据
           -options 选项，可以对写入进行一些设置    options 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
           -calllback 当写入完成以后执行的函数


           -flag
             r只读
             w可写
             a追加



 */
//引入fs模块
var fs = require("fs");
//file 文件路径 - 可以是相对路径，也可以是绝对路径
fs.writeFile('hello3.txt', '这是简单文件的写入操作',{flag:'a'}, function (err) { //有一个参数，err
    if (!err) {
        console.log('写入成功');
    } else {
        console.log(err);
    }
})