function adjustLights(lights: string[]): number {
  const checkLights = (lights: string[]) => {
    let result = 0

    for (let i = 1; i < lights.length; i++) {
      if (lights[i] !== lights[i - 1]) continue;
      result++
      lights[i] = ["🟢", "🔴"][+(lights[i] === "🟢")]
    }
    return result
  }
  return Math.min(checkLights([...lights]), checkLights([...lights].reverse()))
}
