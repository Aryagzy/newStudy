// exports.name = '孙悟空';
// exports.age = 18;
// exports.sayName = function () {
//     console.log('我是孙悟空~~~');
// }

/* module.exports = {
    name: '猪八戒',
    age: 40,
    sayName: () => {
        console.log('我是猪八戒啊');
    }
} */

/* var obj = {};
obj.a = {};
var a = obj.a;
//a 和  obj.a指向的是同一个对象
console.log(a == obj.a); */

var obj = new Object();
obj.name  = '沙师弟';
var obj2 = obj;
obj2.name = '师傅';

// obj2 = null;
console.log(obj.name);
console.log(obj2.name);

var obj = new Object();
console.log(obj);

