const COORDS = {
  N: [0, 1],
  S: [0, -1],
  E: [1, 0],
  W: [-1, 0],
};

function getManhattanDistance(pos) {
  return Math.abs(pos[0]) + Math.abs(pos[1]);
}

function turnShip([x, y], turn, degrees) {
  const rad = ('R' === turn ? -1 : 1) * degrees * (Math.PI / 180);
  const cos = Math.round(Math.cos(rad));
  const sin = Math.round(Math.sin(rad));

  return [
    x * cos - y * sin || 0, // fix -0 situation
    y * cos + x * sin || 0, // fix -0 situation
  ];
}

function changePosition(pos, dir, change) {
  return [
    pos[0] + (dir[0] * change),
    pos[1] + (dir[1] * change),
  ];
}

function moveShip(moves, waypoint) {
  let dir = waypoint || [1, 0];
  let pos = [0, 0];
  const hasWaypoint = !!waypoint;

  for (let i = 0; i < moves.length; i += 1) {
    const [move, ...value] = moves[i];
    const change = Number(value.join(''));

    if (['L', 'R'].includes(move)) {
      dir = turnShip(dir, move, change);
    } else if ('F' === move) {
      pos = changePosition(pos, dir, change);
    } else {
      if (hasWaypoint) {
        dir = changePosition(dir, COORDS[move], change);
      } else {
        pos = changePosition(pos, COORDS[move], change);
      }
    }
  }

  return pos;
}

function solutionOne(data) {
  return getManhattanDistance(moveShip(data));
}

function solutionTwo(data) {
  return getManhattanDistance(moveShip(data, [10, 1]));
}

module.exports = {
  getManhattanDistance,
  turnShip,

  solutionOne,
  solutionTwo,
};
