// node commonJS 导出
const os = require('os')
module.exports = { //对象形式
   showMem() {
    const mem = os.freemem() / os.totalmem() * 100
    console.log(`内存占用率${mem.toFixed(2)}`);
  },
  showCpu() {
    const cpuStat = require('cpu-stat');//第三方 需要安装
    cpuStat.usagePercent((err, percent) => {
      console.log(`cpu占用率：${percent.toFixed(2)}`);
    })
  }
  
}