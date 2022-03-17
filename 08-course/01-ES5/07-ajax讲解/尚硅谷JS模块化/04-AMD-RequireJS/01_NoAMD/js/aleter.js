//定义一个有依赖的模块
(function (window, dataService) {
  let name = 'alerter'
  function showMsg() {
    alert(dataService.getMsg() + ', ' + name)
  }
  window['alerter'] = { showMsg }
})(window, window['dataService']);