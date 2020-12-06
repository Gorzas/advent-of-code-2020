function splitPeopleAnswers(data = '') {
  return data.split('\n');
}

function sumAnswers(answers = [], type = 'or') {
  const accepted = {};
  let sum = 0;

  for (let i = 0; i < answers.length; i += 1) {
    const person = answers[i];

    for (let j = 0; j < person.length; j += 1) {
      if (!accepted[person[j]]) {
        accepted[person[j]] = 1;
        sum += 1;
      } else {
        accepted[person[j]] += 1;
      }
    }
  }

  return 'or' === type 
    ? sum
    : Object.values(accepted).filter((elem) => answers.length === elem).length;
}

function solutionOne(data) {
  let sum = 0;

  for (let i = 0; i < data.length; i += 1) {
    const groupAnswers = splitPeopleAnswers(data[i]);

    sum += sumAnswers(groupAnswers);
  }

  return sum;
}

function solutionTwo(data) {
  let sum = 0;

  for (let i = 0; i < data.length; i += 1) {
    const groupAnswers = splitPeopleAnswers(data[i]);

    sum += sumAnswers(groupAnswers, 'and');
  }

  return sum;
}

module.exports = {
  splitPeopleAnswers,
  sumAnswers,

  solutionOne,
  solutionTwo,
};
