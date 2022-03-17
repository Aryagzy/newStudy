// version>10
const { readFile } = require('fs').promises
readFile('./package.json').then((res) => {
  console.log(res.toString());
})