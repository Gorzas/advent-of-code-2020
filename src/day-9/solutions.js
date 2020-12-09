function findNumber(map, needle) {
  let found = false;

  for (let [_, value] of map) {
    if (value.includes(needle)) {
      found = true;
    }
  }

  return found;
}

function solutionOne(data, n = 25) {
  const sum = new Map();
  const keys = [];
  let result;

  for (let i = 0; i < data.length; i += 1) {
    const value = Number(data[i]);

    if (n === keys.length) {
      if (!findNumber(sum, value)) {
        result = value;
        break;
      }

      const remove = keys.shift();
      sum.delete(remove);
    }

    for (let j = 0; j < keys.length; j += 1) {
      sum.get(keys[j]).push(keys[j] + value);
    }

    sum.set(value, []);
    keys.push(value);
  }

  return result;
}

function solutionTwo(data, n = 25) {
  const needle = solutionOne(data, n);
  let sum = 0;
  const numbers = [];
  let i = 0;

  while (sum !== needle) {
    const value = Number(data[i]);

    numbers.push(value);
    sum += value;

    while (sum > needle) {
      const remove = numbers.shift();

      sum -= remove;
    }

    i += 1;
  }

  const orderedArray = numbers.sort((a, b) => a < b ? -1 : 1);

  return orderedArray[0] + orderedArray[orderedArray.length - 1];
}

module.exports = {
  solutionOne,
  solutionTwo,
};
