/* 
   namespace模式：简单的对象封装
 */
let obj = {
    msg: 'namespace',
    foo() {
        console.log(this.msg);
    }
}