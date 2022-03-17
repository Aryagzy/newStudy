//定义一个没有依赖的模块
(function (window) {
    let msg = 'dataService'
    function getMsg() {
      return msg.toUpperCase()
    }
    window['dataService'] = {getMsg}
  })(window)