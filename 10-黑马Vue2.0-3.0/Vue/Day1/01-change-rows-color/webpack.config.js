//使用Node.js中的导出语法，向外导出一个webpack的配置对象
const path = require('path')
module.exports = {
    //mode 代表webpack运行的模式，可选值有两个 development 和 production
    //结论：开发的时候一定要用 developement ,因为追求的是打包速度，而不是体积
    //反过来，发布上线的时候一定能用到production ,因为上线追求的是体积小，而不是打包速度
    mode: 'development',

    //entry:'指定要处理的哪个文件'
    entry: path.join(__dirname, './src/index1.js'),
    //output 指定生成的文件要存放到哪里
    output: {
        //存放到目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名字
        filename:'bundle.js'
    }
    
}