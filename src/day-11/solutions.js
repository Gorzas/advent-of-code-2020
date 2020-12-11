function getSeatState(arr, x, y, adjacent = false, maxPeople = 4) {
  let state = arr[x][y];

  if ('.' === state) {
    return state;
  }

  const dir = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const maxOccupiedSeats = 'L' === state ? 1 : maxPeople;
  let numOccupiedSeats = 0;
  let pos = 0;

  while (pos < dir.length && numOccupiedSeats < maxOccupiedSeats) {
    const dx = dir[pos][0];
    const dy = dir[pos][1];
    let i = x + dx;
    let j = y + dy;
    let seat;

    pos += 1;

    do {
      if (!arr[i] || !arr[i][j]) {
        break;
      }
      
      seat = arr[i][j];

      i += dx;
      j += dy;
    } while(!adjacent && seat && '.' === seat);

    if ('#' === seat) {
      numOccupiedSeats += 1;
    }
  }

  if ('L' === state && !numOccupiedSeats) {
    state = '#';
  } else if ('#' === state && numOccupiedSeats >= maxPeople) {
    state = 'L';
  }
  
  return state;
}

function solutionOne(data, adjacent = true, maxPeople = 4) {
  let isStable = false;
  let numOccupiedSeats;
  let seats = [...data];
  
  while (!isStable) {
    let newSeats = [];
    numOccupiedSeats = 0;
    isStable = true;

    for (let i = 0; i < seats.length; i += 1) {
      for (let j = 0; j < seats[i].length; j += 1) {
        let seat = seats[i][j];
        let state = getSeatState(seats, i, j, adjacent, maxPeople);

        if (!newSeats[i]) {
          newSeats[i] = '';
        }

        newSeats[i] += state;

        // seat has changed
        if (state !== seat) {
          isStable = false;
        }

        // count occupied
        if ('#' === state) {
          numOccupiedSeats += 1;
        }
      }
    }

    seats = newSeats;
  }

  return numOccupiedSeats;
}

function solutionTwo(data) {
  return solutionOne(data, false, 5);
}

module.exports = {
  getSeatState,

  solutionOne,
  solutionTwo,
};
