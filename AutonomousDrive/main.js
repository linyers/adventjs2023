function autonomousDrive(store, movements) {
  let movementRobot = [...store].map((e) => e.split(""));
  const movementsDict = {
    R: [0, 1],
    L: [0, -1],
    U: [-1, 0],
    D: [1, 0],
  };

  for (let m of movements) {
    const rowIndex = movementRobot.findIndex((e) => e.includes("!"));
    const colIndex = movementRobot[rowIndex].findIndex((e) => e === "!");

    const movement = movementsDict[m];
    const movementRealized = [rowIndex + movement[0], colIndex + movement[1]];
    if (
      movementRealized[0] < 0 ||
      movementRealized[0] > movementRobot.length - 1
    )
      continue;
    if (
      movementRealized[1] < 0 ||
      movementRealized[1] > movementRobot[0].length - 1
    )
      continue;

    const [nextRow, nextCol] = movementRealized;

    const nextChar = movementRobot[nextRow][nextCol];
    if (nextChar === "*") continue;
    movementRobot[nextRow][nextCol] = "!";
    movementRobot[rowIndex][colIndex] = ".";
  }
  return movementRobot.map((e) => e.join(""));
}

console.log(autonomousDrive(["..!....", "...*.*."], ["R", "R", "D", "R"]));
