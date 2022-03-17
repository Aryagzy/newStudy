var  a = 10;
/* 
  在node中有一个全局对象，global,他的作用和网页中的window类似
     在全局中创建的变量都会作为global的属性保存
     在全局中创建的函数会作为global的方法保存

   当Node在执行模块代码时，他会首先在代码的最顶端添加如下代码
      function(exports,require,module,_filename,_dirname){
    在代码最低端添加如下代码
      }

    实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递了5个实参

         exports - 该对象用来将变量或函数暴露到外部
         require - 函数，用来引入外部的模块
         module  - module代表的是当前模块的本身，
                 -exports就是module属性
                 -既可以使用exports导出，也可以使用module.exports导出

         _filename -当前模块的完整路径  C:\Users\DELL\Desktop\Study\08-course\01-ES5\07-ajax讲解\尚硅谷-node\1-Node\05-module.js
         _dirnameL -当前模块所在文件夹的完整路径  C:\Users\DELL\Desktop\Study\08-course\01-ES5\07-ajax讲解\尚硅谷-node\1-Node

 */
//console.log(global.a);
/* 
   arguments.callee  -这个属性保存的是当前的执行函数对象
 */
// console.log( arguments.callee + ' ');
// console.log(module.exports == exports)
// console.log(__filename);
// console.log(__dirname);
