function travelDistance(map) {
  let mapArr = map.split("\n").map((row) => row.split(""));
  let distance = 0;

  for (let kid = 1; kid < 10; kid++) {
    const rowIdx = mapArr.findIndex((row) => row.includes("S"));
    const colIdx = mapArr[rowIdx].findIndex((col) => col === "S");

    const kidRowIdx = mapArr.findIndex((row) => row.includes("" + kid));
    if (kidRowIdx === -1) break;
    const kidColIdx = mapArr[kidRowIdx].findIndex((col) => col === "" + kid);

    const rowDiff = Math.abs(kidRowIdx - rowIdx);
    const colDiff = Math.abs(kidColIdx - colIdx);

    distance += rowDiff + colDiff;
    mapArr[rowIdx][colIdx] = ".";
    mapArr[kidRowIdx][kidColIdx] = "S";
  }
  return distance;
}

console.log(
  travelDistance(`.....1....
..S.......
..........
....3.....
......2...`),
);
