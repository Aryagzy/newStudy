var createMsgWin = {
    init(param){
        var initParam = {
            title:'友情提示',   //标题
            tips:"没有任何提示信息！",   //主体内容
            btnOk:'确定',     //确定按钮文字
            btnNo:'取消', //取消按钮文字
            area:['250','210'],   //自定义弹框大小
            closeOnClickModal: true, // 是否可以通过点击modal关闭
            dir:'RT',
            hasShade:true,  //是否需要遮罩层
            isShowBtnNo: true,    //是否需要显示取消按钮
            defineCls:'',  //自定义样式
            funcOk:function () {  // 点击确定执行的方法
            },
            funcNo:function () {   // 点击取消执行的方法
            }
        };

      this.paramEnd = Object.assign({},initParam,param);  
      this.body  = document.getElementsByTagName('body')[0];

      //遮罩层
      if(this.paramEnd.hasShade){
        this.bgObj = document.createElement("DIV");
        this.bgObj.style.cssText = "width:100%;height:100%;position:fixed;z-index: 990;top: 0px;left: 0px;background: #000000;filter: alpha(Opacity=30); -moz-opacity:0.30;opacity:0.30;";
        this.body.appendChild(this.bgObj);
      }
    //   this.drawHTML(); 
      this.drawHTML2();
      this.eventFun();
      this.dragTitle();
    },
    drawHTML(){
        //main
        this.tipWinObj = document.createElement('div');
        this.tipWinObj.className='tip-window-layer';
        if(this.paramEnd.defineCls){
            
            this.tipWinObj.classList.add(this.paramEnd.defineCls);
        }

        //top区域
        var topDiv = document.createElement('div');
        topDiv.className = 'tip-header-section';

        var titDiv = document.createElement("DIV");
        titDiv.className = 'tip-title';
        titDiv.innerHTML = this.paramEnd.title;

        var cross = document.createElement("DIV");
        cross.className= 'tip-icon-close';
        cross.innerHTML = 'X';

        var contentDiv = document.createElement("DIV");
        contentDiv.className = 'tip-main-content';
        contentDiv.innerHTML = this.paramEnd.tips;
    
        //bottom区域
        var bottomDiv = document.createElement("DIV");
        bottomDiv.className = 'tip-bottom-section';
    
        var okBtn = document.createElement("BUTTON");
        okBtn.className = 'btnOk';
        okBtn.innerHTML = this.paramEnd.btnOk;
    
        var noBtn = document.createElement("BUTTON");
        noBtn.className = 'btnNo';
        noBtn.innerHTML = this.paramEnd.btnNo;

        topDiv.appendChild(titDiv);
        topDiv.appendChild(cross);
        this.tipWinObj.appendChild(topDiv);
        this.tipWinObj.appendChild(contentDiv);


        this.paramEnd.isShowBtnNo && bottomDiv.appendChild(noBtn);
        bottomDiv.appendChild(okBtn);
        this.tipWinObj.appendChild(bottomDiv);
 
        this.body.appendChild(this.tipWinObj);
    },

    drawHTML2(){
        this.tipWinObj = document.createElement('div');
        this.tipWinObj.className='tip-window-layer';
        this.tipWinObj.style.cssText = ';width:'+this.paramEnd.area[0]+'px;height:'+this.paramEnd.area[1]+'px;';
        // this.tipWinObj.style = '';

        if(this.paramEnd.defineCls){
            this.tipWinObj.classList.add(this.paramEnd.defineCls);
        }

        var tipWinInner = `
            <div class="tip-header-section">
                <div class="tip-title">${this.paramEnd.title}</div> 
                <div class="tip-icon-close">X</div>
            </div>
            <div class="tip-main-content">${this.paramEnd.tips}</div>
            <div class="tip-bottom-section">
                ${this.paramEnd.isShowBtnNo ? '<button type="button" class="btnOk">'+this.paramEnd.btnOk+'</button>':''}    
                <button type="button" class="btnNo">${this.paramEnd.btnNo}</button>
            </div>
        `;
        this.tipWinObj.innerHTML  = tipWinInner;
        this.body.appendChild(this.tipWinObj);

    },
    eventFun(){ 
        this.tipWinObj.addEventListener('click',function(ev){   
            var target = ev.target,
                clsName = target.className;
            switch(clsName){
                case 'btnOk':
                    //loading
                    this.showLoading();
                    this.paramEnd.funcOk(function(res){       
                        console.log(res); 
                        if(!res) {
                            return;
                        }
                        //隐藏box
                        this.removeLoading();
                        this.body.removeChild(this.tipWinObj);
                        this.paramEnd.hasShade && this.body.removeChild(this.bgObj);
                        console.log('ppp');
                    }.bind(this))
                    break;
                case 'tip-icon-close':
                case 'btnNo':
                      this.body.removeChild(this.tipWinObj);
                      this.paramEnd.hasShade && this.body.removeChild(this.bgObj);
                break;    

            }
        }.bind(this),false);

        if(this.paramEnd.hasShade && this.paramEnd.closeOnClickModal) {
            this.bgObj.onclick = function(){
                this.body.removeChild(this.tipWinObj);
                this.body.removeChild(this.bgObj);
            }.bind(this);
        }
    },
    showLoading(){
        this.loading = document.createElement('div');
        this.loading.innerHTML='loading...';
        this.loading.className = 'loading-msg-tip';
        document.body.appendChild(this.loading);
    },
    removeLoading(){
        document.body.removeChild(this.loading);
    },
    //拖动标题可移动
    dragTitle(){
        var headerTop = this.tipWinObj.querySelector('.tip-header-section');
        var moveFlag = false;
        var dis = {};
        headerTop.onmousedown = function(e){
            moveFlag = true;
            headerTop.style.cursor = 'move';
            //计算鼠标落下点与边界的距离
            dis.x = e.clientX - this.tipWinObj.offsetLeft;
            dis.y = e.clientY - this.tipWinObj.offsetTop;

        }.bind(this);

        this.body.onmousemove = function(e){
            if(!moveFlag) {
                return;
            }
            //跟你局拖拽距离设置当前拖拽元素的位置
            this.tipWinObj.style.left = (e.clientX-dis.x)+'px';
            this.tipWinObj.style.top = (e.clientY-dis.y)+'px';

        }.bind(this);

        headerTop.onmouseup = function(){
            moveFlag = false;
            headerTop.removeAttribute('style');
        }

    }
}


