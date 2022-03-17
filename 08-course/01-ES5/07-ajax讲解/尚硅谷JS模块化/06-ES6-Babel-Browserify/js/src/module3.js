//默认暴露  可以暴露任意数据类型，暴露什么数据收到的就是什么数据
//export default value;
// export default () => {
//     console.log('我是默认的暴露的箭头函数');
// }
export default {
    msg: '默认暴露',
    foo() {
        console.log(this.msg);
    }
}