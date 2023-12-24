function organizeChristmasDinner(dishes) {
  const ingredients = [];
  dishes.forEach((dishe) => {
    for (let i = 1; i < dishe.length; i++) {
      const ingredient = dishe[i];
      if (!ingredients.flat().includes(ingredient)) {
        ingredients.push([ingredient, dishe[0]]);
      } else {
        const index = ingredients.findIndex((ing) => ing.includes(ingredient));
        ingredients[index].push(dishe[0]);
      }
    }
  });

  const result = ingredients.filter((ing) => ing.length > 2);
  result.sort((a, b) => a[0].localeCompare(b[0]));
  result.forEach((ing) =>
    ing.sort((a, b) => {
      if (a === ing[0]) return -1;
      else if (b === ing[0]) return 1;
      return a.localeCompare(b);
    }),
  );
  return result;
}
