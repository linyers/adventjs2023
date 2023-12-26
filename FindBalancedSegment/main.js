function findBalancedSegment(message) {
  let segment = [0, 0];

  for (let i = 0; i < message.length; i++) {
    let ones = message[i];
    let zeros = +(ones === 0);
    let currentSegment = [i, i];

    for (let j = i + 1; j < message.length; j++) {
      ones += message[j];
      zeros += +(message[j] === 0);

      if (ones === zeros) {
        currentSegment[1] = j;
      }
    }

    if (currentSegment[1] - currentSegment[0] > segment[1] - segment[0]) {
      segment[0] = currentSegment[0];
      segment[1] = currentSegment[1];
    }
  }

  if (segment[0] + segment[1] === 0) return [];

  return segment;
}
