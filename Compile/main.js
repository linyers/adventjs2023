function compile(code) {
  let counter = 0;
  let returnPoint = -1;

  for (let i = 0; i < code.length; i++) {
    const instruction = code[i];

    if (instruction === "¿" && counter <= 0) {
      i = code.indexOf("?", i);
    } else if (instruction === "+") counter++;
    else if (instruction === "-") counter--;
    else if (instruction === "*") counter *= 2;
    else if (instruction === "%") returnPoint = i;
    else if (instruction === "<" && returnPoint !== -1) {
      i = returnPoint;
      returnPoint = -1;
    }
  }
  return counter;
}

console.log(compile("<%+¿++%++<?"));
