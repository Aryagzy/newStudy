function getStyle(obj, name) {
    if (obj.currentStyle) {
      return obj.currentStyle[name];
    } else {
      // @ts-ignore
      return getComputedStyle(obj, false)[name];
    }
  }

  function startMove(obj, attr, iTarget,fnEnd) {  //参数增加 函数
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      var cur = 0;

      if (attr == "opacity") {
        //==
        cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
      } else {
        cur = parseInt(getStyle(obj, attr));
      }

      var speed = (iTarget - cur) / 6;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

      if (cur == iTarget) {
          clearInterval(obj.timer);
          if (fnEnd) fnEnd(); //如果传进来函数，在运动执行完以后，执行函数
      } else {
        if (attr == "opacity") {
          obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
          obj.style.opacity = (cur + speed) / 100;
        } else {
          obj.style[attr] = cur + speed + "px";
        }
      }
    }, 50);
  }