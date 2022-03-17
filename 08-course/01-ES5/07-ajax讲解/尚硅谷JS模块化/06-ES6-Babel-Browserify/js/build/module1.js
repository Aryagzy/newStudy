'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;
exports.bar = bar;
//暴露模块 分别暴露
function foo() {
    console.log('foo is  module1');
}
function bar() {
    console.log('bar is module2');
}
var arr = exports.arr = [1, 3, 4, 6, 5];