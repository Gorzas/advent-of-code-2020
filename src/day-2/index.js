const readFile = require('../utils/read-file');

function prepareData(data) {
  return data.split('\n').slice(0, -1);
}

function solutionOne() {
  const data = readFile(__dirname);
  const arr = prepareData(data);
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const data = arr[i].split(' ');
    const [min, max] = data[0].split('-');
    const letter = data[1][0];
    const pattern = data[2];
    let count = 0;

    if (!pattern.includes(letter)) {
      continue;
    }

    for (let j = 0; j < pattern.length; j++) {
      if (letter === pattern[j]) {
        count += 1;
      }
    }

    if (count >= Number(min) && count <= Number(max)) {
      result += 1;
    }
  }

  return result;
}

function solutionTwo() {
  const data = readFile(__dirname);
  const arr = prepareData(data);
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const data = arr[i].split(' ');
    const [first, second] = data[0].split('-');
    const letter = data[1][0];
    const pattern = data[2];

    if (
      (letter === pattern[first - 1] && letter !== pattern[second - 1]) ||
      (letter !== pattern[first - 1] && letter === pattern[second - 1])
    ) {
      result += 1;
    }
  }

  return result;
}

console.time('Time1');
console.log(solutionOne())
console.timeEnd('Time1');

console.time('Time2');
console.log(solutionTwo())
console.timeEnd('Time2');

