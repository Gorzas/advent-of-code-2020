const {
  getInstruction,

  solutionOne,
  solutionTwo,
} = require('./solutions.js');

test('#getInstruction - with an string, it should return the instruction and the arguments', () => {
  expect(getInstruction('nop +0')).toEqual(['nop', 0]);
  expect(getInstruction('acc -99')).toEqual(['acc', -99]);
  expect(getInstruction('jmp +4')).toEqual(['jmp', 4]);
});

test('#solutionOne - with a list of instructions, it should return the accumulator', () => {
  const data = [
    'nop +0',
    'acc +1',
    'jmp +4',
    'acc +3',
    'jmp -3',
    'acc -99',
    'acc +1',
    'jmp -4',
    'acc +6',
  ];

  expect(solutionOne(data)).toBe(5);
});

test('#solutionTwo - with a list of instructions, it should return the accumulator fixing the wrong commands', () => {
  const data = [
    'nop +0',
    'acc +1',
    'jmp +4',
    'acc +3',
    'jmp -3',
    'acc -99',
    'acc +1',
    'jmp -4',
    'acc +6',
  ];

  expect(solutionTwo(data)).toBe(8);
});