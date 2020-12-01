const fs = require('fs');


function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('input.txt', 'utf8', function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = readFile;
