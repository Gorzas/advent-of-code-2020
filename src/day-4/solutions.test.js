const {
  validateBirthYear,
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