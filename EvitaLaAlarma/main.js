function maxGifts(houses) {
  let newNumber = 0;
  let before = 0;

  for (let h of houses) {
    let newBefore = Math.max(newNumber, before);

    newNumber = before + h;
    before = newBefore;
  }

  return Math.max(newNumber, before);
}

console.log(maxGifts([5, 1, 1, 5]));
