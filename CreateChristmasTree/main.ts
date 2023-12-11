function createChristmasTree(ornaments: string, height: number): string {
  const result = []
  let chars = ornaments.repeat(height*height)
  for (let i = 1; i < height + 1; i++) {
    const leafs = chars.slice(0, i).split("").join(" ")
    result.push(" ".repeat(height - i) + leafs + "\n")
    chars = chars.slice(i)
  }
  result.push(" ".repeat(height - 1) + "|" + "\n")
  return result.join("")
}
