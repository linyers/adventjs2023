function getStaircasePaths(steps, maxJump) {
  const result = [];
  const findAllJumps = (combinations, jumps, steps) => {
    if (steps === 0) {
      result.push([...combinations]);
      return;
    }

    if (steps < 0) {
      return;
    }

    for (let i = 0; i < jumps.length; i++) {
      combinations.push(jumps[i]);
      findAllJumps(combinations, jumps, steps - jumps[i]);
      combinations.pop();
    }
  };

  const combinations = Array(maxJump)
    .fill()
    .map((_, index) => index + 1);
  findAllJumps([], combinations, steps);

  return result;
}
