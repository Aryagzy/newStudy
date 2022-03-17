//AJax请求封装
function xmlAjax(opt) {
    var initOpt = {
        method: 'post',
        url: '',
        data: null, //参数
        async: true,//是否是异步的
        //告诉服务器，我给的是什么数据
        contentType: 'application/json;charset=UTF-8',
        done: function () { },
        fail: function () { },
        //jQuery  dataType
    };
    //合并两个对象
    var endobj = Object.assign({}, initOpt, opt);

     //1.创建xml对象
    var xhr = new XMLHttpRequest();
    
     //对参数data做出解析
    var isGet = endobj.method.toLowerCase() == 'get';
    if (isGet && endobj.data) { //又是get请求又有data参数
        // {
        //     name: 'lli',
        //     age: '20'
        // }
        //http://localhost:3000/info? name=lli&age=20  
        var str = '';
        for (var key in endobj.data) {
            str += key + '=' + endobj.data[key] + '&';
          }
        //最后会多一个&，字符串截取 去掉&
        str = str.substring(0, str.length - 1);
        endobj.url = endobj.url + '?' + str;
        
    }


     //2.创建http 请求，连接服务器
     // xhr.open(method,url,flag) flag:true-异步
     // method: post get head delete put
     xhr.open(endobj.method, endobj.url, endobj.async);

     //3.设置请求头部的方法，必须在open  和 send之间
     xhr.setRequestHeader("Content-Type", endobj.contentType);
    
    
     // 4.发送数据
    if (isGet) { //get请求
        xhr.send(null);
    } else {//非get请求
        if (endobj.data) {
            var dataparam = JSON.stringify(endobj.data);
            xhr.send(dataparam);
        } else {
            xhr.send(null);
        }
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);//parse字符串转成json对象
                endobj.done(response);
            }
           
        } else {
            endobj.fail(response);
       
        }
      };

}