function checkSabotage(leftCorner, rightCorner, store) {
  const storeSlice = store
    .slice(leftCorner[0], rightCorner[0] + 1)
    .map((s) => s.slice(leftCorner[1], rightCorner[1] + 1));
  const counter = storeSlice.flat().filter((s) => s === "*").length;

  return counter > 0 ? `${counter}` : " ";
}

function revealSabotage(store) {
  let result = [...store];

  for (let row = 0; row < store.length; row++) {
    const rowLength = store[row].length;
    for (let col = 0; col < rowLength; col++) {
      if (store[row][col] === "*") continue;

      const left = col > 0 ? col - 1 : null;
      const right = col < rowLength - 1 ? col + 1 : null;
      const top = row > 0 ? row - 1 : null;
      const bottom = row < store.length - 1 ? row + 1 : null;

      let leftCorner = [row, col];
      let rightCorner = [row, col];

      if (left === null && top === null) {
      } else if (left !== null && top === null) {
        leftCorner = [row, left];
      } else if (left === null && top !== null) {
        leftCorner = [top, col];
      } else leftCorner = [top, left];

      if (right === null && bottom === null) {
      } else if (right !== null && bottom === null) {
        rightCorner = [row, right];
      } else if (right === null && bottom !== null) {
        rightCorner = [bottom, col];
      } else rightCorner = [bottom, right];

      result[row][col] = checkSabotage(leftCorner, rightCorner, [...store]);
    }
  }
  return result;
}

console.log(
  revealSabotage([
    ["*", " ", " ", " "],
    [" ", " ", "*", " "],
    [" ", " ", " ", " "],
    ["*", " ", " ", " "],
  ]),
);
