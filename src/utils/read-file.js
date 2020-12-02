const fs = require('fs');


function readFile(dir = '') {
  return fs.readFileSync(`${dir}/input.txt`).toString();
}

module.exports = readFile;
