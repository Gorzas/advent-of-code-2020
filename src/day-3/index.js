const readFile = require('../utils/read-file');

function prepareData(data) {
  return data.split('\n').slice(0, -1);
}

function solutionOne(data) {
  let result = 0;
  let pos = 0;

  for (let i = 0; i < data.length; i += 1) {
    const length = data[i].length;

    if (data[i][pos] === '#') {
      result += 1;
    }

    pos = (pos + 3) % length;
  }

  return result;
}

function solutionTwo(data) {
  const slopes = [{
    right: 1,
    down: 1,
  }, {
    right: 3,
    down: 1,
  }, {
    right: 5,
    down: 1,
  }, {
    right: 7,
    down: 1,
  }, {
    right: 1,
    down: 2,
  }].map((elem) => ({ ...elem, pos: 0, trees: 0 }));

  for (let i = 0; i < data.length; i += 1) {
    const length = data[i].length;

    for (let j = 0; j < slopes.length; j += 1) {
      if (!(i % slopes[j].down)) {
        if (data[i][slopes[j].pos] === '#') {
          slopes[j].trees += 1;
        }

        slopes[j].pos = (slopes[j].pos + slopes[j].right) % length;
      }
    }
  }

  return slopes.reduce((prev, cur) => prev * cur.trees, 1);
}

const data = prepareData(readFile(__dirname));

console.time('Time1');
console.log(solutionOne(data))
console.timeEnd('Time1');

console.time('Time2');
console.log(solutionTwo(data))
console.timeEnd('Time2');

