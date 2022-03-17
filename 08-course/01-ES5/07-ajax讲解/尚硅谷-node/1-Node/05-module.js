// var hello = require('./helloModule');
// console.log(hello.age);
// console.log(hello.name);
// console.log(hello.sayName());
/* 
   exports和 module.exports
       -通过exports只能使用.的方式来向外暴露内部的变量
         exports.xxx = xxx
       -而module.exports既可以通过.的形式，也可以直接赋值
          module.exports.xxx = xxx
          module.exports = {}
 */