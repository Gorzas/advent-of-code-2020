function getBusTimestamp(timestamp, bus) {
  const div = Math.floor(timestamp / bus);
  const hasRemainder = Boolean(timestamp % bus);

  return div * bus + (hasRemainder ? bus : 0);
}

function solutionOne(data) {
  const timestamp = Number(data[0]);
  const buses = data[1].split(',');
  let earlierTime;
  let busTaken;

  for (let i = 0; i < buses.length; i += 1) {
    const bus = buses[i];

    if ('x' === bus)  {
      continue;
    }

    let busTime = getBusTimestamp(timestamp, Number(bus));

    if (undefined === earlierTime || busTime < earlierTime) {
      earlierTime = busTime;
      busTaken = Number(bus);
    }
  }

  return (earlierTime - timestamp) * busTaken;
}

// from: https://shainer.github.io/crypto/math/2017/10/22/chinese-remainder-theorem.html
function extgcd(a, b) {
  if (a < b) {
      let tmp = extgcd(b, a);

      return {
        gcd: tmp.gcd, 
        x: tmp.y,
        y: tmp.x,
      };
  }

  if (b === 0) {
      return {
        gcd: a, 
        x: 1,
        y: 0,
      };
  }

  let r = a % b;
  let tmp = extgcd(b, r);

  return {
    gcd: tmp.gcd, 
    x: tmp.y, 
    y: (tmp.x - Math.floor(a / b) * tmp.y),
  };
}

function solutionTwo(data) {
  const buses = data[1].split(',');
  let prod = 1;
  let numbers = [];
  let sum = 0;

  for (let i = 0; i < buses.length; i += 1) {
    const bus = buses[i];

    if ('x' === bus) {
      continue;
    }

    let num = Number(bus);
    let rem = i < num ? num - i : i - num;

    while (rem >= num) {
      rem -= num;
    }

    numbers.push({
      num,
      rem,
    });

    prod *= num;
  }

  for (let i = 0; i < numbers.length; i += 1) {
    const bus = numbers[i];
    const {
      num,
      rem,
    } = bus;

    const { y } = extgcd(num, Math.floor(prod / num));

    sum += rem * y * Math.floor(prod / num);
  }

  while (sum < 0) {
    sum += prod;
  }

  return sum % prod;
}

module.exports = {
  getBusTimestamp,

  solutionOne,
  solutionTwo,
};
