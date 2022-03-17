/* 
  异步文件的写入：
     fs.open(path,flags[,mode].callback)
       -用来打开一个文件
       -异步调用的方法，结果都是通过回调函数返回的
       -callback - 回调函数，带有两个参数如：callback(err, fd)
           回调函数的两个参数:
              err 错误对象  如果没有错误为null
              fd 文件的描述符
    fs.write(fd,string[,position[,encoding]],callback)
      -用来异步写入一个文件


    fs.close(fd,callback)
     -用来关闭一个文件
     


 */
//引入fs模块
var fs = require("fs");
const { connected } = require("process");

//打开文件
fs.open('hello2.txt', 'w', function (err, fd) { //多增加一个回调函数
     console.log('回调函数中的代码')
    //判断是否出错
    if (!err) { //没有错误
        //如果没有出错，对文件进行写入操作
        fs.write(fd, '异步写入的内容', function (err) {
            if (!err) {
                console.log('写入成功');
            }

            //写入成功以后关闭文件
            fs.close(fd, function (err) {
                if (!err) {
                    console.log('文件已经关闭');
                }
            })
        })
        
    } else {
        console.log(err);
    }
})
console.log('open下的代码');//先执行这段代码，然后再执行回调函数中的代码