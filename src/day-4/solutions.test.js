const {
  validateBirthYear,
  validateIssueYear,
  validateExpirationYear,
  validateHeight,
  validateHex,
  validateEyeColor,
  validatePassport,

  solutionTwo,
} = require('./solutions.js');

test('#validateBirthYear - with invalid birth year, it should return false', () => {
  expect(validateBirthYear('aaa')).toBeFalsy();
  expect(validateBirthYear('1919')).toBeFalsy();
  expect(validateBirthYear('2003')).toBeFalsy();
});

test('#validateBirthYear - with valid birth year, it should return true', () => {
  expect(validateBirthYear('1920')).toBeTruthy();
  expect(validateBirthYear('2002')).toBeTruthy();
  expect(validateBirthYear('1987')).toBeTruthy();
  expect(validateBirthYear(2000)).toBeTruthy();
});

test('#validateIssueYear - with invalid issue year, it should return false', () => {
  expect(validateIssueYear('aaa')).toBeFalsy();
  expect(validateIssueYear('1919')).toBeFalsy();
  expect(validateIssueYear('2003')).toBeFalsy();
  expect(validateIssueYear('2021')).toBeFalsy();
});

test('#validateIssueYear - with valid issue year, it should return true', () => {
  expect(validateIssueYear('2010')).toBeTruthy();
  expect(validateIssueYear('2020')).toBeTruthy();
  expect(validateIssueYear('2015')).toBeTruthy();
});

test('#validateExpirationYear - with invalid expiration year, it should return false', () => {
  expect(validateExpirationYear('aaa')).toBeFalsy();
  expect(validateExpirationYear('1919')).toBeFalsy();
  expect(validateExpirationYear('2003')).toBeFalsy();
  expect(validateExpirationYear('2031')).toBeFalsy();
});

test('#validateExpirationYear - with valid expiration year, it should return true', () => {
  expect(validateExpirationYear('2020')).toBeTruthy();
  expect(validateExpirationYear('2030')).toBeTruthy();
  expect(validateExpirationYear('2025')).toBeTruthy();
});

test('#validateHeight - with invalid height, it should return false', () => {
  expect(validateHeight('aaa')).toBeFalsy();

  expect(validateHeight('149cm')).toBeFalsy();
  expect(validateHeight('194cm')).toBeFalsy();
  expect(validateHeight('58in')).toBeFalsy();
  expect(validateHeight('77in')).toBeFalsy();

  expect(validateHeight('60')).toBeFalsy();
  expect(validateHeight('170')).toBeFalsy();

  expect(validateHeight('60inc')).toBeFalsy();
  expect(validateHeight('170cmf')).toBeFalsy();
});

test('#validateHeight - with valid height, it should return true', () => {
  expect(validateHeight('150cm')).toBeTruthy();
  expect(validateHeight('170cm')).toBeTruthy();
  expect(validateHeight('193cm')).toBeTruthy();
  expect(validateHeight('59in')).toBeTruthy();
  expect(validateHeight('65in')).toBeTruthy();
  expect(validateHeight('76in')).toBeTruthy();
});

test('#validateHex - with invalid hexadecimal, it should return false', () => {
  expect(validateHex('6070AA')).toBeFalsy();

  expect(validateHex('#333')).toBeFalsy();
  expect(validateHex('#6050GH')).toBeFalsy();
  expect(validateHex('#6050gh')).toBeFalsy();
});

test('#validateHex - with valid hexadecimal, it should return true', () => {
  expect(validateHex('#AAAAAA')).toBeTruthy();
  expect(validateHex('#123456')).toBeTruthy();
  expect(validateHex('#1234af')).toBeTruthy();
});

test('#validateEyeColor - with invalid eye color, it should return false', () => {
  expect(validateEyeColor('green')).toBeFalsy();
  expect(validateEyeColor('blue')).toBeFalsy();
});

test('#validateEyeColor - with valid eye color, it should return true', () => {
  expect(validateEyeColor('amb')).toBeTruthy();
  expect(validateEyeColor('blu')).toBeTruthy();
  expect(validateEyeColor('gry')).toBeTruthy();
});


test('#validatePassport - with invalid passport, it should return false', () => {
  expect(validatePassport('abcdefghi')).toBeFalsy();
  expect(validatePassport('0123456789')).toBeFalsy();
});

test('#validatePassport - with valid passport, it should return true', () => {
  expect(validatePassport('000000000')).toBeTruthy();
  expect(validatePassport('123456789')).toBeTruthy();
});


test('#solutionTwo - with n valid passport, it should return n', () => {
  const data = [
    `iyr:2020 byr:1968
    ecl:gry
    eyr:2030 hcl:#1976b0
    cid:127 pid:701862616
    hgt:161cm`,
  ];
  const expected = 1;

  expect(solutionTwo(data)).toBe(expected);
});