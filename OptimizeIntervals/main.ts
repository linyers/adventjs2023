function optimizeIntervals(intervals: number[][]): number[][] {
  const sortedIntervals = [...intervals].sort((a, b) => a[0] - b[0]);
  const result = [sortedIntervals[0]];

  for (let i = 1; i < sortedIntervals.length; i++) {
    let currentInterval = result[result.length - 1];
    if (sortedIntervals[i][0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], sortedIntervals[i][1]);
    } else {
      result.push(sortedIntervals[i]);
    }
  }

  return result;
}
