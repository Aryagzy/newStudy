
$(function () {
    //1.Click Even
    $('div').on('click', function (event) {
        debugger;
        alert('click');
    })
    $('#btn2').on('dblclick', function () {
        alert('dblclick');
    })

   // $('#btn1').off('click'); 
    $('#btn1').trigger('aclick');

    // $('#btn1').click(function () {
    //     alert('click');
    // })
    // $('#btn1').dblclick(function () {
    //     alert('dblclick');
    // })
      
    //2.Foucus / Blur
    $('#ip1').on('focus', function () {  //获取焦点
        $('#result1').html('focused');
    });
    $('#ip1').on('blur', function () { //失去焦点
        $('#result1').html('blur');
    })

     // 3.Mouse
    $('#btn3').on('mousedown', function () {
        $('#result2').html('mousedown');
    })
    $('#btn3').on('mouseup', function () {
            $('#result2').html('mouseup');
    })
   //click = mousedown+ mouseup
    $('#btn3').on('click', function () {
        $('#result2').html('click');
    })
    $('#btn3').on('mouseover', function () {
        $('#result2').html('mouseover');
   })
    $('#btn3').on('mouseout', function () {
        $('#result2').html('mouseout');
    })

    //4.Key
    $('#ip2').on('keydown', function () {
        $('#result3').append('<br>keydown');
    })
    $('#ip2').on('keyup', function () {
        $('#result3').append('<br>keyup');
    })
    
    $('#ip2').on('keypress', function () {
        $('#result3').append('<br>keypress');
    })

   
    //5.Change
    $('#ip3').on('change', function () {
        $('#result4').html('changed');
    })

    //6.Submit
    $('#form1').on('submit', function () {
        alert('submit');
    })



})