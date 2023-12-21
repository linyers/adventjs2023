function distributeGifts(weights: number[][]): number[][] {
  const result = Array.from({ length: weights.length }, () => []);
  for (let i = 0; i < weights.length; i++) {
    for (let j = 0; j < weights[i].length; j++) {
      const left = j > 0 ? weights[i][j - 1] : null;
      const right = j < weights[0].length - 1 ? weights[i][j + 1] : null;
      const up = i > 0 ? weights[i - 1][j] : null;
      const down = i < weights.length - 1 ? weights[i + 1][j] : null;

      const num = weights[i][j];
      const numbers = [num, left, right, up, down].filter((n) => n);
      const sum = numbers.reduce((a, b) => a + b, 0) / numbers.length;
      result[i].push(Math.round(sum));
    }
  }
  return result;
}
