function getStyle(obj, name) {
    if (obj.currentStyle) {
      return obj.currentStyle[name];
    } else {
      // @ts-ignore
      return getComputedStyle(obj, false)[name];
    }
  }
   // startMove(oDiv,{width:400,height:400},fnENd())
  function startMove(obj,json,fnEnd) {  //参数增加 函数
    clearInterval(obj.timer);
      obj.timer = setInterval(function () {
          var bStop = true;  //假设所有的值都已经到了

          for (var attr in json) {
            var cur = 0;

            if (attr == "opacity") {
              //==
              cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
            } else {
              cur = parseInt(getStyle(obj, attr));
            }
      
            var speed = (json[attr] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
              
              if (cur != json[attr]) {//如果有不相等的，说明还有值没有到达iTarget
                  bStop = false;
            }
      
            
            if (attr == "opacity") {
                obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
                obj.style.opacity = (cur + speed) / 100;
              } else {
                obj.style[attr] = cur + speed + "px";
            }
          }
          
          if (bStop) {
              clearInterval(obj.timer);
              if (fnEnd) fnEnd();
          }
     
    }, 50);
  }