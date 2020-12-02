const readFile = require('../utils/read-file');

function prepareData(data) {
  return data.split('\n')
    .map((n) => Number(n))
    .filter(n => n)  // avoids zero values
    .sort((a, b) => a > b ? -1 : 1);
}

function solutionOne() {
  const data = readFile(__dirname);
  const arr = prepareData(data);
  const results = {};

  for (let i = 0; i < arr.length; i++) {
    results[2020 - arr[i]] = i;
  }

  let j = 0;

  while (!results[arr[j]]) {
    j++;
  }

  console.log(arr[j] * arr[results[arr[j]]]);
}

function solutionTwo() {
  const data = readFile(__dirname);
  const arr = prepareData(data);
  const results = {};
  let solution;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i; j--) {
      if (i === j) {
        continue;
      }

      if (2020 < arr[i] + arr[j]) {
        break;
      }

      results[2020 - arr[i] - arr[j]] = [i, j];
    }
  }

  for (let k = 0; k < arr.length; k++) {
    if (results[arr[k]]) {
      solution = results[arr[k]].concat(k);
      break;
    }
  }

  return solution.reduce((prev, cur) => prev * arr[cur], 1);
}

console.time('Time');
console.log(solutionTwo());
console.timeEnd('Time');
