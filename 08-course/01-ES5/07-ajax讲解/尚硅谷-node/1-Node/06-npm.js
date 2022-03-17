/* 
    通过Npm下载的包都放到node-modules文件夹中
    我们通过npm下载的包，直接通过包名引入即可

    node在使用模块名来引入模块时，他会首先在当前目录的node_modules中寻找是否含有该模块
    如果有则直接使用，没有去上一级node_modules中寻找
    如果有直接使用，没有继续向上找，直到找到为止，
    找到磁盘的根目录，如果没有，直接报错

 */
var math = require("math");
console.log(math.add(12,34));