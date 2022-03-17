/* 
   文件系统(File System)
      -文件系统简单来说就是通过Node来操作系统中的文件
      -使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载


      同步文件的写入：
        -手动操作的步骤
          1.打开文件
             fs.openSync(path,flags[,mode])
                -path 要打开文件的路径
                -flags 打开文件要操作的类型
                   r:只读的
                   w: 可写的
                -mode 设置文件的操作权限，一般不传
                返回值：
                 -该方法会返回一个文件的描述符作为结果，我们可以通过该描述符来对文件进行各种操作
          2.向文件中写入内容
               fs.writeSync(fd,string[,position[,ecoding]])
                  -fd 文件的描述符，需要传递要写入的文件的描述符
                  -string 要写入的内容
                  -position 要写入的起始位置
                  -encoding 写入得编码，默认utf-8
          3.保存并且关闭文件
            fs.closeSync(fd)
              -fd 要关闭的文件的描述符

 */
var fs = require("fs");
var fd = fs.openSync("hello.txt", "w");//返回的描述符
console.log(fd); 

//向文件中写入内容
fs.writeSync(fd, '今天的天气真的不错！');

//关闭文件
fs.closeSync(fd);


