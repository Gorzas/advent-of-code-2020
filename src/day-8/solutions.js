function getInstruction(str) {
  const split = str.split(' ');

  return [
    split[0],
    Number(split[1]),
  ];
}

function runProgram(data) {
  let result = 0;
  const instructions = new Set();
  let next = 0;
  let ended = false;

  do {
    const [cmd, arg] = getInstruction(data[next]);

    instructions.add(next);

    switch (cmd) {
      case 'jmp':
        next += arg;
        break;
      case 'acc':
        result += arg;
        next += 1;
        break;
      default:
        next += 1;
    }

    ended = !data[next];

  } while(!instructions.has(next) && data[next])

  return {
    ended,
    result,
  };
}

function solutionOne(data) {
  const {
    result,
  } = runProgram(data);

  return result;
}

function solutionTwo(data) {
  let result = 0;

  for (let i = 0; i < data.length; i += 1) {
    const [cmd, arg] = getInstruction(data[i]);

    if (!['nop', 'jmp'].includes(cmd)) {
      continue;
    }

    let {
      ended,
      result: accumulator,
    } = runProgram([
      ...data.slice(0, i),
      `${'jmp' === cmd ? 'nop' : 'jmp'} ${arg}`,
      ...data.slice(i + 1),
    ]);

    if (ended) {
      result = accumulator;
      break;
    }
  }

  return result;
}

module.exports = {
  getInstruction,

  solutionOne,
  solutionTwo,
};
