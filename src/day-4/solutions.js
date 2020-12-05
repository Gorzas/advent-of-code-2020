
function validateBirthYear(value = '') {
  const year = Number(value);

  return !isNaN(year)
    && year >= 1920
    && year <= 2002;
}

function solutionOne(data) {
  const requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid',
  ];
  let result = 0;

  for (let i = 0; i < data.length; i += 1)   {
    const matches = [...data[i].matchAll(/([a-z]+):/g)].map(elem => elem[1]);
    let valid = true;

    if (matches.length < requiredFields.length) {
      continue;
    }

    for (let j = 0; j < requiredFields.length; j += 1) {
      if (!matches.includes(requiredFields[j])) {
        valid = false;
        break;
      }
    }

    if (valid) {
      result += 1;
    }
  }

  return result;
}

function solutionTwo(data) {
  return;
}

module.exports = {
  validateBirthYear,

  solutionOne,
  solutionTwo,
};
