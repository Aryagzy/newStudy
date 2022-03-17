//引入其他模块
//语法： import xxx from '路径'
//引入第三方库
import $ from 'jquery';
import {foo,bar} from './module1.js';
import { fun, fun2 } from './module2';
import module3 from './module3';
// console.log({ foo, bar }, { fun, fun2 });
$('body').css('background', 'green');

foo();
bar();
fun();
fun2();
module3.foo();