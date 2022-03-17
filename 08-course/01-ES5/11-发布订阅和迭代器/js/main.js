// 发布者
var eventObj = {
  // 缓存列表，存放订阅者的信息
  // list: {
  //   red:[fn1,fn2,fn3],
  //   blue:[fn4,fn5]
  // }
  list: {},

  // 添加订阅
  listen: function (key, fn) {
    if (!this.list[key]) {
      this.list[key] = [];
    }
    typeof fn === "function" && this.list[key].push(fn);
  },

  // 发布信息
  trigger: function () {
    // var key = [].shift.call(arguments);
    // var clolor = Array.from(argumetns).shift();
    var key = Array.prototype.shift.call(arguments); // 取到了颜色.argumetns的第一个元素
    var fns = this.list[key];
    for (var i = 0; i < fns.length; i++) {
      var fn = fns[i]; //循环遍历，把同一个颜色的fn都取出来
      // fn();
      fn.apply(this, arguments); //fn的参数 arguments size和key
    }
  },

  // 取消订阅
  removeListen: function (key, fn) {
    var fns = this.list[key];
    // 不存在的key 或者未传入回调函数fn----错误判断
    if (!fns) {
      return;
    }
    if (typeof fn === "undefined") {
      return;
    }
    var sindex = fns.indexOf(fn); //找到函数fn1的索引
    fns.splice(sindex, 1); //splice删除数组中sidex的索引，长度为1
  },
};
