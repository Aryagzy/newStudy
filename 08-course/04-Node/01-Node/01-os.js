// const os = require('os')
// function showMem() {
//   const mem = os.freemem() / os.totalmem() * 100
//   console.log(`内存占用率${mem.toFixed(2)}`);
// }
// function showCpu() {
//   const cpuStat = require('cpu-stat');//第三方 需要安装
//   cpuStat.usagePercent((err, percent) => {
//     console.log(`cpu占用率：${percent.toFixed(2)}`);
//   })
// }
// showMem()
// showCpu()

//导入
const { showMem } = require('./showFun.js')
var showFun = require('./showFun.js')
setInterval(() => {
  showFun.showCpu()
  showFun.showMem()
},1000)