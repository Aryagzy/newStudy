// const express = require('express')
const express = require('./06-myexpress.js')
const app = express()
app.get('/name', (req, res) => {
  res.end('hello,world')
})
app.get('/users', (req, res) => {
  res.end(JSON.stringify({name:'abcdefgggggg'}))
})
app.listen(3200, () => {
  console.log('Example liseten at 3200');
})

// const url = require('url')
// //解析路径
// var test = url.parse('https://user:pass@sub.example.com.8080/p/a/t/h?query=s')
// console.log(test);
