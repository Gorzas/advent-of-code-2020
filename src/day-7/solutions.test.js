const {
  extractColor,
  extractNumber,
  calculateBags,

  solutionOne,
  solutionTwo,
} = require('./solutions.js');

test('#extractColor - with a bag without number, it should return the color of the bag', () => {
  expect(extractColor('light red bags ')).toBe('light red');
  expect(extractColor('dark orange bags')).toBe('dark orange');
});

test('#extractColor - with a bag with number, it should return the color of the bag', () => {
  expect(extractColor('1 bright white bag')).toBe('bright white');
  expect(extractColor('2 muted yellow bags.')).toBe('muted yellow');
});

test('#solutionOne - with a list of bags, it should return the number of bags that could have a shiny gold bag inside', () => {
  const data = [
    'light red bags contain 1 bright white bag, 2 muted yellow bags.',
    'dark orange bags contain 3 bright white bags, 4 muted yellow bags.',
    'bright white bags contain 1 shiny gold bag.',
    'muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.',
    'shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.',
    'dark olive bags contain 3 faded blue bags, 4 dotted black bags.',
    'vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.',
    'faded blue bags contain no other bags.',
    'dotted black bags contain no other bags.',
  ];
  
  expect(solutionOne(data)).toBe(4);
});

test('#extractNumber - with a bag with number, it should return the number', () => {
  expect(extractNumber('1 bright white bag')).toBe(1);
  expect(extractNumber('2 muted yellow bags.')).toBe(2);
  expect(extractNumber('no other bags.')).toBe(0);
});

test('#calculateBags - with a tree of bags and a color, it should return the number the bags it can contain', () => {
  const noOther = {
    children: [],
    number: [],
  };
  const darkViolet = {
    children: [noOther],
    number: [0],
  };
  const darkBlue = {
    children: [darkViolet],
    number: [2],
  };
  const darkGreen = {
    children: [darkBlue],
    number: [2],
  };

  expect(calculateBags(noOther)).toBe(0);
  expect(calculateBags(darkViolet)).toBe(0);
  expect(calculateBags(darkBlue)).toBe(2);
  expect(calculateBags(darkGreen)).toBe(6);
});

test('#solutionTwo - with a list of bags, it should return the number of bags are inside in a shiny gold bag', () => {
  const data = [
    'shiny gold bags contain 2 dark red bags.',
    'dark red bags contain 2 dark orange bags.',
    'dark orange bags contain 2 dark yellow bags.',
    'dark yellow bags contain 2 dark green bags.',
    'dark green bags contain 2 dark blue bags.',
    'dark blue bags contain 2 dark violet bags.',
    'dark violet bags contain no other bags.',
  ];
  
  expect(solutionTwo(data)).toBe(126);
});