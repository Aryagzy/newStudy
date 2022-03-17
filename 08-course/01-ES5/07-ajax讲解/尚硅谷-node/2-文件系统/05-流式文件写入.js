/* 
   同步，异步，简单文件的写入都不适合大文件的写入，性能比较差，容易导致内存的溢出
 */

//引入fs模块
var fs = require("fs");

//流式文件写入 -----插水管
//创建一个可写流，把水管连接了
/* 
   fs.createWriteStream(path,[,options])
      -可以用来创建一个可写流
      -path 文件路径
      -options 配置的参数



 */
var ws = fs.createWriteStream('hello4.txt'); //ws和hello4.txt连接上了

/* 
  可以通过监听流的open 和 close事件来监听流的打开和关闭
   -on(事件字符串，回调函数)  -可以为对象绑定一个事件,永久性
   -once(事件字符串，回调函数)  -可以为对象绑定一个一次性事件，该事件将会在触发一次以后自动失效

    
 */

ws.once('open', function () {
    console.log('水流打开了');
})

ws.once('close', function () {
    console.log('水流关闭了');
})

//通过ws向文件中输出内容
ws.write('江南可采莲');
ws.write('莲叶何田田');
ws.write('鱼戏莲叶间');
ws.write('鱼戏莲叶东');
ws.write('鱼戏莲叶西');
ws.write('鱼戏莲叶南');
ws.write('鱼戏莲叶北');

//关闭流 ws.close()
ws.end();

