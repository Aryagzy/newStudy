/* 
   Buffer(缓冲区)
      -Buffer的结构和数组很像，操作的方法和数组类似
      -数组中不能存储二进制文件，而buffer就是专门用来存储二进制数据
      -使用buffer不需要引用模块，直接使用即可
      -在buffer中存储的都是二进制数据，但是在显示时都是16进制的形式显示的
          buffer中每一个元素的范围是从 00-ff 0-255
          00000000-1111111

          计算机中 一个0或者一个1 我们称1位（bit)
          8bit = 1byte(字节)
          1024byte = 1kb
          1024kb = 1mb
          1024mb = 1gb
          1024gb = 1tb
           
           buffer中的一个元素，占用内存中的一个字节

           -Buffer的大小一旦确定，不能修改，Buffer实际上是对底层内存的


 */

/* var str = 'Hello 尚硅谷';
    将一个字符串保存到buffer中
var buf = Buffer.from(str); */

/* console.log(buf);
console.log(buf.length); //占用内存的大小，字节的大小
console.log(str.length);//字符串的长度 */

//创建一个指定大小的buffer
//buffer构造函数都是不推荐使用的
// var buf2 = new Buffer(10);//10个字节的buffer
// console.log(buf2.length);


/* 
    Buffer.from(str) 将一个字符串转换为buffer
    Buffer.alloc(size) 创建一个指定大小的buffer
    Buffer.allocUnsafe(size) 创建一个指定大小的buffer,但是可能包含敏感数字
    buf.toString() 将缓冲区的数据转为字符串  buffer--string

 */
//创建一个10个字节的buffer
var buf2 = Buffer.alloc(10);
//通过索引，来操作buf中的元素
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 256;
buf2[3] = 0xaa;
buf2[10] = 9;
//只要数字在控制台或者页面输出一定是10进制
//console.log(buf2[3].toString(16)); //buf2[3].toString(16)把10进制数字转成16进制数字
/* for (var i = 0; i < buf2.length; i++){
    console.log(buf2[i]);//打印出的结果都是10进制
} */
//Buffer.allocUnsafe(size)  创建一个指定大小的buffer,但是buffer中可能含有敏感数据
/* var buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
 */

var buf4 = Buffer.from('我是郭小胖');
console.log(buf4);
console.log(buf4.toString());



 





