function getIndexsForPalindrome(word: string): any {
  if (word === word.split("").reverse().join("")) {
    return [];
  }

  const splited_word = word.split("")
  const result = []
  splited_word.forEach((_, idx) => {
    for (let i = 0; i < splited_word.length; i++) {
      if (result.length !== 0) return
      
      if (i === idx) {
        continue
      }
      const newWord = [...splited_word]
      const aux = newWord[i];
      newWord[i] = newWord[idx];
      newWord[idx] = aux;

      if (newWord.join("") === newWord.reverse().join("")) {
        result.push(idx, i)
      }
    }
  })

  return result.length !== 0 ? result : null
}

