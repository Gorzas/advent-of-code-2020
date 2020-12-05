function validateNumber(min, max) {
  return (value = '') => {
    const number = Number(value);

    return !isNaN(number)
      && number >= min
      && number <= max;
  };
}

const validateBirthYear = validateNumber(1920, 2002);
const validateIssueYear = validateNumber(2010, 2020);
const validateExpirationYear = validateNumber(2020, 2030);

function validateHeight(value = '') {
  const matches = value.match(/(\d+)([a-z]+)/);

  if (matches) {
    const height = matches[1];
    const unit = matches[2];

    if ('in' === unit) {
      return validateNumber(59, 76)(height);
    } else if ('cm' === unit) {
      return validateNumber(150, 193)(height);
    }
  }

  return false;
}

function validateHex(value = '') {
  return value.match(/^#[0-9a-fA-F]{6}$/);
}

function validateEyeColor(value = '') {
  return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
}

function validatePassport(value = '') {
  return 9 === value.length
    && !isNaN(Number(value));
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
  const requiredFields = {
    byr: validateBirthYear,
    iyr: validateIssueYear,
    eyr: validateExpirationYear,
    hgt: validateHeight,
    hcl: validateHex,
    ecl: validateEyeColor,
    pid: validatePassport,
  };
  const requiredKeys = Object.keys(requiredFields);
  let result = 0;

  for (let i = 0; i < data.length; i += 1)   {
    const matches = data[i].match(/([a-z]+):([#0-9a-z]+)/gi)
      .map((elem) => elem.split(':'))
      .reduce((prev, cur) => ({ ...prev, [cur[0]]: cur[1]}), {});
    let valid = true;

    for (let j = 0; j < requiredKeys.length; j += 1) {
      const key = requiredKeys[j];

      if (
        !matches[key]
        || !requiredFields[key](matches[key])
      ) {
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

module.exports = {
  validateBirthYear,
  validateIssueYear,
  validateExpirationYear,
  validateHeight,
  validateHex,
  validateNumber,
  validateEyeColor,
  validatePassport,
  
  solutionOne,
  solutionTwo,
};
