const readFile = require('../utils/read-file');

function prepareData(data) {
  return data.split('\n')
    .map((n) => Number(n))
    .sort((a, b) => a > b ? -1 : 1);
}


async function solutionOne() {
  const data = await readFile(__dirname);
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


solutionOne();
