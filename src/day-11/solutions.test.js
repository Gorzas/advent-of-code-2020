const {
  getSeatState,

  solutionOne,
  solutionTwo,
} = require('./solutions.js');

test('#getSeatState - with floor, it should return .', () => {
  const data = [
    'L.L',
    'LLL',
    'L.L',
  ];

  expect(getSeatState(data, 0, 1)).toBe('.');
  expect(getSeatState(data, 2, 1)).toBe('.');
});

test('#getSeatState - with empty seat and empty adjacent seats, it should return #', () => {
  const data = [
    'L.L',
    'LLL',
    'L.L',
  ];

  expect(getSeatState(data, 0, 0)).toBe('#');
  expect(getSeatState(data, 1, 1)).toBe('#');
  expect(getSeatState(data, 2, 2)).toBe('#');
});

test('#getSeatState - with empty seat and at least one adjacent seat occupied, it should return L', () => {
  const data = [
    'L.L',
    'L#L',
    'L.L',
  ];

  expect(getSeatState(data, 0, 0)).toBe('L');
  expect(getSeatState(data, 1, 0)).toBe('L');
  expect(getSeatState(data, 2, 2)).toBe('L');
});

test('#getSeatState - with seat occupied and four or more adjacent seats occupied, it should return L', () => {
  const data = [
    '#.#',
    'L#L',
    '#.#',
  ];

  expect(getSeatState(data, 1, 1)).toBe('L');
});

test('#getSeatState - with seat occupied and less than four adjacent seats occupied, it should return #', () => {
  const data = [
    'L.#',
    'L##',
    'L.#',
  ];

  expect(getSeatState(data, 1, 1)).toBe('#');
  expect(getSeatState(data, 0, 2)).toBe('#');
  expect(getSeatState(data, 1, 2)).toBe('#');
});

test('#getSeatState - with seat occupied and less than five adjacent seats occupied, it should return #', () => {
  const data = [
    '#.##.##.##',
    '#######.##',
    '#.#.#..#..',
    '####.##.##',
    '#.##.##.##',
    '#.#####.##',
    '..#.#.....',
    '##########',
    '#.######.#',
    '#.#####.##'
  ];

  expect(getSeatState(data, 1, 0, false, 5)).toBe('#');
});

test('#solutionOne - with a list of seats, it should return the optimize number of occupied seats', () => {
  const data = [
    'L.LL.LL.LL',
    'LLLLLLL.LL',
    'L.L.L..L..',
    'LLLL.LL.LL',
    'L.LL.LL.LL',
    'L.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLLL',
    'L.LLLLLL.L',
    'L.LLLLL.LL',
  ];

  expect(solutionOne(data)).toBe(37);
});

test('#solutionTwo - with a list of seats, it should return the optimize number of occupied seats', () => {
  const data = [
    'L.LL.LL.LL',
    'LLLLLLL.LL',
    'L.L.L..L..',
    'LLLL.LL.LL',
    'L.LL.LL.LL',
    'L.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLLL',
    'L.LLLLLL.L',
    'L.LLLLL.LL',
  ];

  expect(solutionTwo(data)).toBe(26);
});