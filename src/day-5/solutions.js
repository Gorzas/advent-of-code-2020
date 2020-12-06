function getNumber(str = '', upper = '') {
  let number = '';

  for (let i = 0; i < str.length; i += 1) {
    if (upper === str[i]) {
      number += '1';
    } else {
      number += '0';
    }
  }

  return parseInt(number, 2);
}

function getRow(value = '') {
  return getNumber(value, 'B');
}

function getColumn(value = '') {
  return getNumber(value, 'R');
}

function getSeatId(value = '') {
  const row = getRow(value.slice(0, 7));
  const col = getColumn(value.slice(7));

  return row * 8 + col;
}

function getEmptySeat(min, max, sum) {
  const sumMax = (max * (max + 1)) / 2;
  const sumMin = (min * (min - 1)) / 2;

  return (sumMax - sumMin) - sum;
}

function solutionOne(data) {
  let result = 0;

  for (let i = 0; i < data.length; i += 1) {
    const seatId = getSeatId(data[i]);

    if (seatId > result) {
      result = seatId;
    }
  }

  return result;
}

function solutionTwo(data) {
  let sum = 0;
  let min;
  let max;

  for (let i = 0; i < data.length; i += 1) {
    const seat = getSeatId(data[i]);
    
    if (!min || seat < min) {
      min = seat
    }

    if (!max || seat > max) {
      max = seat;
    }

    sum += seat;
  }

  return getEmptySeat(min, max, sum);
}

module.exports = {
  getColumn,
  getEmptySeat,
  getRow,
  getSeatId,

  solutionOne,
  solutionTwo,
};
