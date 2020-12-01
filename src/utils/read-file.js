const fs = require('fs');


function readFile(dir = '') {
  return new Promise((resolve, reject) => {
    fs.readFile(`${dir}/input.txt`, 'utf8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = readFile;
