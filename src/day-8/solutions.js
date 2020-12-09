function getInstruction(str) {
  const split = str.split(' ');

  return [
    split[0],
    Number(split[1]),
  ];
}

function solutionOne(data) {
  let result = 0;
  const instructions = {};
  let next = 0;

  do {
    const [cmd, arg] = getInstruction(data[next]);

    instructions[next] = true;

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

  } while(!instructions[next] && data[next])
 
  return result;
}

function solutionTwo(data) {
  let result = 0;
  const instructions = {};
  let next = 0;

  do {
    const [cmd, arg] = getInstruction(data[next]);

    instructions[next] = true;

    console.log(data[next]);

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

    // loop ahead
    if (instructions[next]) {
      next = 'jmp' === cmd
        ? next - arg + 1
        : next + arg - 1;
    }

  } while(data[next])
 
  return result;
}

module.exports = {
  getInstruction,

  solutionOne,
  solutionTwo,
};
