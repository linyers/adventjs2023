function adjustLights(lights) {
  let first = " "
  let result = 0

  for (let light of lights) {
    result += +(light === first)
    first = light === first ? " " : light
  }
  return result
}
