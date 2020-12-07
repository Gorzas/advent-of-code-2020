const NEEDLE = 'shiny gold';

function extractColor(bag = '') {
  const match = bag.trim().match(/[\d ]*(.+?) bags?\.?/)

  return match 
    ? match[1]
    : '';
}

function extractNumber(bag = '') {
  const match = bag.trim().match(/(\d)+/);

  return match
    ? Number(match[1])
    : 0;
}

function canHaveShinyBags(bag = {}) {
  const {
    children,
    hasShinyBag,
  } = bag;

  if (hasShinyBag) {
    return true;
  }

  if (!children.length) {
    return false;
  }

  return children.some((elem) => canHaveShinyBags(elem));
}

function constructTree(data) {
  const tree = {}; // struct: [color]: { children: [Object], number: [Number] hasShinyBag: Boolean }
  const bags = [];

  for (let i = 0; i < data.length; i += 1) {
    const [rawBag, contain] = data[i].split('contain');
    const bag = extractColor(rawBag) ;

    if (!tree[bag]) {
      tree[bag] = {
        children: [],
        number: [],
      };
    }

    const children = contain.split(',').map((str) => [extractColor(str), extractNumber(str)]);

    for (let j = 0; j < children.length; j += 1) {
      const [color, number] = children[j];

      if (NEEDLE === color) {
        tree[bag].hasShinyBag = true;
        continue;
      }

      if (!tree[color]) {
        tree[color] = {
          children: [],
          number: [],
        };
      }

      tree[bag].children.push(tree[color]);
      tree[bag].number.push(number);
    }

    bags.push(tree[bag]);
  }
  
  return {
    tree,
    bags,
  };
}

function calculateBags(bag = {}) {
  const {
    children,
    number,
  } = bag;
  let sum = 0;

  if (!children.length) {
    return 0;
  }

  for (let i = 0; i < children.length; i += 1) {
    sum += number[i] + number[i] * calculateBags(children[i]);
  }

  return sum;
}

function solutionOne(data) {
  let result = 0;
  const {
    bags,
  } = constructTree(data);

  for (let k = 0; k < bags.length; k += 1) {
    if (canHaveShinyBags(bags[k])) {
      result += 1;
    }
  }

  return result;
}

function solutionTwo(data) {
  const {
    tree,
  } = constructTree(data);

  return calculateBags(tree[NEEDLE]);
}

module.exports = {
  extractColor,
  extractNumber,
  calculateBags,

  solutionOne,
  solutionTwo,
};
