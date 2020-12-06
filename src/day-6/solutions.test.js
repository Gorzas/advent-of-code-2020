const {
  splitPeopleAnswers,
  sumAnswers,

  solutionOne,
  solutionTwo,
} = require('./solutions.js');


test('#splitPeopleAnswers - with an input, it should retrieve an array of answers', () => {
  const data = 'ab\nac';

  expect(splitPeopleAnswers(data)).toEqual(['ab', 'ac']);
});

test('#sumAnswers - with an array of answers, it should retrieve total number of different accepted answers', () => {
  expect(sumAnswers(['a', 'a', 'a', 'a'])).toBe(1);
  expect(sumAnswers(['a', 'b', 'c'])).toBe(3);
  expect(sumAnswers(['ab', 'ac'])).toBe(3);
});

test('#sumAnswers - with an array of answers and type "and", it should retrieve total number of answers accepted by everyone', () => {
  expect(sumAnswers(['a', 'a', 'a', 'a'], 'and')).toBe(1);
  expect(sumAnswers(['a', 'b', 'c'], 'and')).toBe(0);
  expect(sumAnswers(['ab', 'ac'], 'and')).toBe(1);
  expect(sumAnswers(['ab', 'abc', 'abd'], 'and')).toBe(2);
});

test('#solutionOne - with a list of group answers, it should retrieve total number of different accepted answers', () => {
  const data = [
    'abc',
    'a\nb\nc',
    'ab\nac',
    'a\na\na\na',
    'b',
  ];
  
  expect(solutionOne(data)).toBe(11);
});

test('#solutionTwo - with a list of group answers, it should retrieve total number of answers accepted by everyone in a group', () => {
  const data = [
    'abc',
    'a\nb\nc',
    'ab\nac',
    'a\na\na\na',
    'b',
  ];
  
  expect(solutionTwo(data)).toBe(6);
});