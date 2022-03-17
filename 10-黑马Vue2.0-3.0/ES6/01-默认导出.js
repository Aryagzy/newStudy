let n1 = 10 // 定义模块私有成员n1 
let n2 = 20
function show() { } // 定义模块私有方法
// 使用export default默认导出语法：向外共享n1 和 show两个成员
export default {
    n1,
    show
}