const {
  getColumn,
  getEmptySeat,
  getRow,
  getSeatId,
  solutionOne,
  solutionTwo,
} = require('./solutions.js');

test('#getSeatId - with boarding pass, it should return seat ID', () => {
  expect(getSeatId('BFFFBBFRRR')).toBe(567);
  expect(getSeatId('FFFBBBFRRR')).toBe(119);
  expect(getSeatId('BBFFBBFRLL')).toBe(820);
});

test('#getRow - with row identifier, it should return row number', () => {
  expect(getRow('BFFFBBF')).toBe(70);
  expect(getRow('FFFBBBF')).toBe(14);
  expect(getRow('BBFFBBF')).toBe(102);
});

test('#getColumn - with column identifier, it should return column number', () => {
  expect(getColumn('RRR')).toBe(7);
  expect(getColumn('RLL')).toBe(4);
  expect(getColumn('LLL')).toBe(0);
});

test('#solutionOne - with seats information, it should highest seat ID', () => {
  const data = [
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL',
  ];

  expect(solutionOne(data)).toBe(820);
});

test('#getEmptySeat - with a max number, a min number and a sumatory, it should find the empty seat', () => {
  // [2,3,5]
  expect(getEmptySeat(2, 5, 10)).toBe(4);
  // [9, 10, 11, 12, 14, 15]
  expect(getEmptySeat(9, 15, 71)).toBe(13);
});
