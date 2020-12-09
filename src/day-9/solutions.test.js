const {
  solutionOne,
  solutionTwo,
} = require('./solutions.js');

test('#solutionOne - with a list of numbers, it should first one that isn\'t a sum of the previous n', () => {
  const data = [
    '35',
    '20',
    '15',
    '25',
    '47',
    '40',
    '62',
    '55',
    '65',
    '95',
    '102',
    '117',
    '150',
    '182',
    '127',
    '219',
    '299',
    '277',
    '309',
    '576',
  ];

  expect(solutionOne(data, 5)).toBe(127);
});


test('#solutionTwo - with a list of numbers, it should return the encryption weakness', () => {
  const data = [
    '35',
    '20',
    '15',
    '25',
    '47',
    '40',
    '62',
    '55',
    '65',
    '95',
    '102',
    '117',
    '150',
    '182',
    '127',
    '219',
    '299',
    '277',
    '309',
    '576',
  ];

  expect(solutionTwo(data, 5)).toBe(62);
});
