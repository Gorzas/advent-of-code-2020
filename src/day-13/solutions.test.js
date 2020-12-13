const {
  getBusTimestamp,

  solutionOne,
  solutionTwo,
} = require('./solutions.js');

test('#getBusTimestamp - with a timestamp and bus, it should return the earliest time somebody can take the bus', () => {
  expect(getBusTimestamp(939, 59)).toBe(944);
  expect(getBusTimestamp(590, 59)).toBe(590);
});

test('#solutionOne - with a timestamp and list of available buses, it should return minimum awaiting time multiplied by the bus number', () => {
  const data = [
    '939',
    '7,13,x,x,59,x,31,19',
  ];

  expect(solutionOne(data)).toBe(295);
});

test('#solutionTwo - with a list of available buses, it should return the earliest timestamp', () => {
  let data = [
    '939',
    '3,4,x,x,x,x,5',
  ];

  expect(solutionTwo(data)).toBe(21);

  data = [
    '939',
    '7,13,x,x,59,x,31,19',
  ];

  expect(solutionTwo(data)).toBe(1068781);

  data = [
    '939',
    '17,x,13,19',
  ];
  expect(solutionTwo(data)).toBe(3417);

  data = [
    '939',
    '67,7,59,61',
  ];
  expect(solutionTwo(data)).toBe(754018);

  data = [
    '939',
    '67,x,7,59,61',
  ];
  expect(solutionTwo(data)).toBe(779210);

  data = [
    '939',
    '67,7,x,59,61',
  ];
  expect(solutionTwo(data)).toBe(1261476);

  data = [
    '939',
    '1789,37,47,1889',
  ];
  expect(solutionTwo(data)).toBe(1202161486);
});
