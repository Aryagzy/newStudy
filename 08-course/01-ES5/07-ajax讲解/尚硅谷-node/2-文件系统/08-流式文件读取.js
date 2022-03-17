/* 
   流式文件的读取也适用于一些比较大的文件，可以多次将文件读取到内存中
 */
   var fs = require("fs");

   //创建一个可读流
   var rs = fs.createReadStream("n.mp4");
   //创建一个可写流
var ws = fs.createWriteStream('c.mp4');
  

//pipe()可以直接将可读流中的内容，直接输出到可写流中
rs.pipe(ws);
     
   
   
   
  