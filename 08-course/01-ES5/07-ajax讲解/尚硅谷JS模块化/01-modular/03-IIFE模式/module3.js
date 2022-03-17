/* 
  IIFE模式： 匿名函数自调用（闭包）
 */
//IIFE
(function (window) {
    let msg = 'module3';
    function foo() {
        console.log(msg);
    }
    window['module3'] = {
        foo: foo
    }
})(window)