//使用之前要先引入
const fs = require('fs')

//1.同步读取  readFileSync
// const data = fs.readFileSync('./package.json')
// console.log('data', data);
// console.log('data2', data.toString());

//2.异步读取,回调函数
// const data2 = fs.readFile('./package.json', function (err, data) {
//   console.log('异步data', data);
//   console.log('异步data2',data.toString());
// })

//3.利用promise 异步函数promise化---第一种方式
// function promisify(fn) { //fn == fs.readFile
//   return function () {
//     let args = Array.prototype.slice.call(arguments)
//     return new Promise(function (resolve, reject) {
//       args.push(function (err, result) {
//         if (err) reject(err)
//         else resolve(result)
//       })
//       fn.apply(null,args)
//     })
//   }

// }
// var readFile = promisify(fs.readFile)//返回的是一个函数
// readFile('./package.json').then((res) => { //返回的是一个promise对象
//   console.log(res.toString()); //打印成功返回的结果
// })

//4.version>8  util中有promisify--第二种方式
//不用手动封装，直接结构赋值出来使用
const { promisify } = require('util');
var readFile = promisify(fs.readFile);

// readFile('./package.json').then((res) => {
//   console.log(res.toString());
// })

  ( async () => {
   // var data = await fs.readFile('./package.json') // 这里是不可以的，因为await后面应该是promsie对象
    var data = await readFile('./package.json');//可以访问到的
    console.log('123',data);
  })()

