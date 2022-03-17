/* 
   IIFE模式增强：引入依赖
   这就是现代模块的基石
 */

(function (window,$) {
    let msg = 'module4';
    function foo() {
        console.log(msg);
    }
    window['module4'] = foo;
    $('body').css('background', 'red');

})(window,jQuery)