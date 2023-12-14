function checkIsValidCopy(original: string, copy: string) {
  for (let i = 0; i < original.length; i++) {
    const char = original[i].match(/\w/g)
    const validChars = `${char && `${char}${char[0].toLowerCase()}`}#+:. `
    if (validChars.indexOf(copy[i]) < validChars.indexOf(original[i])) return false;
  }
  return true;
}
