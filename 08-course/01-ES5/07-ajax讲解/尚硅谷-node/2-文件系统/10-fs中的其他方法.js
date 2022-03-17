/* 
   fs.existsSync(path)
      -检查一个文件是否存在
 */
var fs = require('fs');
var isExists = fs.existsSync('nq.mp4');
//console.log(isExists);




/* 
  fs.stat(path,callback)
  fs.statSync(path)
    -获取文件的状态
    -他会给我们返回一个对象，这个对象中保存了当前对象的相关信息
 */
fs.stat('n.mp4', function (err, stat) {
    /* 
        size 文件的大小
        isFile()  是否是一个文件
        isDirectory() 是否是一个文件夹（目录）
     */
        //console.log(stat.isFile())
})




/* 
   fs.unlink(path,callback)
   fs,unlink(path)
     -删除文件
 */
//fs.unlinkSync('a.png');


/* 
    fs.readdir(path,[,options],callback)
    fs.readdir(path,[,options])
      -读取一个目录的目录结构
        files是一个字符串数组，每一个元素就是一个文件夹或者文件的名字
 */
fs.readdir(".", function (err, files) {
    if (!err) {
        //console.log(files);
     }
 })


 /* 
   fs.truncate(path,len,callback)
   fs.truncate(path,len)
     -截断文件，将文件修改为指定的大小
  */
 //一个汉字三个字节
//fs.truncateSync('hello.txt',3);




/* 
  fs.mkdir(path,[,mode],callback)
  fs.mkdirSync(path[,mode])
     -创建一个目录
  fs.rmdir(path,callback)
  fs.rmdirSync(path)


 */
//fs.mkdirSync("hello");
//fs.rmdirSync("hello");


/* 
  fs.rename(oldPath,newPath,callback)
  fs.renameSync(oldPath,newPath)
    -对文件进行重命名
    -参数：
       oldPath  旧的路径
       newpath  新的路径
       callback  回调函数

 */

/* fs.rename('n.mp4', '笔记.mp4', function (err) {
    if (!err) {
        console.log('修改成功');
    }
}) */



/* 
   fs.watchFile(filename,[,options],listener)
      -监视文件的修改
      -参数：
         filename  要监视的文件的名字
         options 配置选项
         listener   回调函数，当文件发生改变时，回调函数会执行
                    在回调函数中会有两个参数：
                        curr 当前文件的状态
                        Prev 修改前文件的状态
                     -这两个对象都是stats对象

 */
fs.watchFile('hello.txt',{interval:1000}, function (curr, prev) {
    console.log('修改文件前大小' + prev.size);
    console.log('修改文件后大小' + curr.size);

})
