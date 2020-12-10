const {
  solutionOne,
  solutionTwo,
} = require('./solutions.js');

test('#solutionOne - with a list of joltages, it should return 1-jolt differences multiplied by 3-jolt differences', () => {
  const data = [
    '28',
    '33',
    '18',
    '42',
    '31',
    '14',
    '46',
    '20',
    '48',
    '47',
    '24',
    '23',
    '49',
    '45',
    '19',
    '38',
    '39',
    '11',
    '1',
    '32',
    '25',
    '35',
    '8',
    '17',
    '7',
    '9',
    '4',
    '2',
    '34',
    '10',
    '3',
  ];

  expect(solutionOne(data)).toBe(220);
});


test('#solutionTwo - with a list of joltages, it should return the different combinations they can be rearranged', () => {
  let data = [
    '16',
    '10',
    '15',
    '5',
    '1',
    '11',
    '7',
    '19',
    '6',
    '12',
    '4',
  ];

  expect(solutionTwo(data)).toBe(8);

  data = [
    '28',
    '33',
    '18',
    '42',
    '31',
    '14',
    '46',
    '20',
    '48',
    '47',
    '24',
    '23',
    '49',
    '45',
    '19',
    '38',
    '39',
    '11',
    '1',
    '32',
    '25',
    '35',
    '8',
    '17',
    '7',
    '9',
    '4',
    '2',
    '34',
    '10',
    '3',
  ];

  expect(solutionTwo(data)).toBe(19208);


});
