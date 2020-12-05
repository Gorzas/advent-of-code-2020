const readFile = require('../utils/read-file');
const {
  solutionOne,
  solutionTwo,
} = require('./solutions');

function prepareData(data) {
  return data.split('\n\n');
}

const data = prepareData(readFile(__dirname));

console.time('Time1');
console.log(solutionOne(data))
console.timeEnd('Time1');

console.time('Time2');
console.log(solutionTwo(data))
console.timeEnd('Time2');
