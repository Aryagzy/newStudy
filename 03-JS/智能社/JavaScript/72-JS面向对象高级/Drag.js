function Drag(id) {
    var _this = this;
    this.disX = 0;
    this.disY = 0;

    this.oDiv = document.getElementById(id);

    this.oDiv.onmousedown = function (ev) {
      _this.fnDown(ev);
      return false;//取消文字选中
    };
  }

  Drag.prototype.fnDown = function (ev) {
    var _this = this;
    var oEvent = ev || event;

    //鼠标按下，计算距离
    this.disX = oEvent.clientX - this.oDiv.offsetLeft;
    this.disY = oEvent.clientY - this.oDiv.offsetTop;
    //鼠标移动
    document.onmousemove = function (ev) {
      _this.fnMove(ev);
    };
    //鼠标抬起
    document.onmouseup = function () {
      _this.fnUp();
    };
  };
  Drag.prototype.fnMove = function (ev) {
    var oEvent = ev || event;

    this.oDiv.style.left = oEvent.clientX - this.disX + "px";
    this.oDiv.style.top = oEvent.clientY - this.disY + "px";
  };
  Drag.prototype.fnUp = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
