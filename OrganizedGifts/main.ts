function organizeGifts(gifts: string): string {
  const pattern_gifts = /\d+\w/g;
  let result = "";

  gifts.match(pattern_gifts)?.forEach((gift) => {
    const letter = gift[length - 1];
    const number = parseInt(gift.slice(0, length - 1));
    const pales = `[${letter}]`.repeat(number / 50);
    const boxes = `{${letter}}`.repeat((number % 50) / 10);
    if (number % 10) {
      const rest = `(${letter})`.repeat(number % 10);
      result += pales + boxes + rest;
    }

    result += pales + boxes + "";
  });
  return result;
}
