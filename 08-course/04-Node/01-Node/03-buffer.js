//1.buffer缓冲区
//2.创建buffer对象，new buffer() Buffer.from()
//3.Buffer.alloc 返回指定大小的buffer实例

const buf01 = Buffer.alloc(10);
console.log(buf01.toString());
const buf02 = Buffer.from([10, 20, 30])
console.log(buf02.toString());
const buf03 = Buffer.from('ssssss')
// console.log(buf03.toString());
buf03.write('hello') //会覆盖掉之前的内容
console.log(buf03.toString()); //从缓冲区中读取数据
//4.连接两个缓冲区concat
var mn = Buffer.concat([buf01, buf02])
console.log(mn);
