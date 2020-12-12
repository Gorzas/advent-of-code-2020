const {
  getManhattanDistance,
  turnShip,

  solutionOne,
  solutionTwo,
} = require('./solutions.js');

test('#getManhattanDistance - with a position, it should return the Manhattan distance', () => {
  expect(getManhattanDistance([0, 5])).toBe(5);
  expect(getManhattanDistance([10, 20])).toBe(30);
  expect(getManhattanDistance([-10, 45])).toBe(55);
  expect(getManhattanDistance([-56, -60])).toBe(116);
});

test('#turnShip - with a initial direction and a turn, it should return the new direction', () => {
  expect(turnShip([0, 1], 'L', 90)).toEqual([-1, 0]);
  expect(turnShip([-1, 0], 'L', 180)).toEqual([1, 0]);
  expect(turnShip([0, 1], 'R', 90)).toEqual([1, 0]);
  expect(turnShip([0, 1], 'R', 180)).toEqual([0, -1]);
  expect(turnShip([0, 1], 'R', 270)).toEqual([-1, 0]);
  expect(turnShip([0, 1], 'L', 270)).toEqual([1, 0]);

  expect(turnShip([10, 4], 'R', 90)).toEqual([4, -10]);
});

test('#solutionOne - with a list of instructions, it should return the Manhattan distance', () => {
  let data = [
    'F10',
    'N3',
    'F7',
    'R90',
    'F11',
  ];

  expect(solutionOne(data)).toBe(25);

  data = [
    'F10',
    'N3',
    'F7', // 17,3
    'R180',
    'F11', // 6,3
  ];

  expect(solutionOne(data)).toBe(9);
});

test('#solutionTwo - with a list of instructions, it should return the Manhattan distance moving against a waypoint', () => {
  const data = [
    'F10',
    'N3',
    'F7',
    'R90',
    'F11',
  ];

  expect(solutionTwo(data)).toBe(286);
});
