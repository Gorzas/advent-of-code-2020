function solutionOne(data) {
  const jolts = {
    3: 0,
    1: 0,
  };
  let last = 0;
  const orderedData = data.sort((a, b) => Number(a) < Number(b) ? -1 : 1)

  for (let i = 0; i < orderedData.length; i += 1) {
    const elem = Number(orderedData[i]);
    const diff = elem - last;

    jolts[diff] += 1;

    last = elem;
  }

  // adds a last one to the 3-jolts
  jolts[3] += 1;

  return jolts[1] * jolts[3];
}

function solutionTwo(data) {
  let result = 1;
  let last = 0;
  let orderedData = data.sort((a, b) => Number(a) < Number(b) ? -1 : 1);
  let length = 0;

  orderedData = [...orderedData, orderedData[orderedData.length - 1] + 3];

  for (let i = 0; i < orderedData.length; i += 1) {
    const jolt = Number(orderedData[i]);
    const diff = jolt - last;

    if (diff < 3) {
      length += 1;
    } else if (length) {
      result *= Math.pow(2, length - 1) - (3 < length ? 1 : 0);
      length = 0;
    }

    last = jolt;
  }

  return result;
}

module.exports = {
  solutionOne,
  solutionTwo,
};
