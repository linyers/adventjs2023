const numbers = [
  [
        ["*", "*", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", "*", "*"],
    ],
    [
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
    ],
    [
        ["*", "*", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        ["*", "*", "*"],
        ["*", " ", " "],
        ["*", " ", " "],
        ["*", "*", "*"],
    ],
    [
        ["*", "*", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        ["*", "*", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        ["*", "*", "*"],
    ],
    [
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", "*", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
    ],
    [
        ["*", "*", "*"],
        ["*", " ", " "],
        ["*", " ", " "],
        ["*", "*", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        ["*", "*", "*"],
    ],
    [
        ["*", "*", "*"],
        ["*", " ", " "],
        ["*", " ", " "],
        ["*", "*", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", "*", "*"],
    ],
    [
        ["*", "*", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
    ],
    [
        ["*", "*", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", "*", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", "*", "*"],
    ],
    [
        ["*", "*", "*"],
        ["*", " ", "*"],
        ["*", " ", "*"],
        ["*", "*", "*"],
        [" ", " ", "*"],
        [" ", " ", "*"],
        ["*", "*", "*"],
    ],
]
function drawClock(time: string): string[][] {
  const clock = Array.from({ length: 7}, () => []);

  for (let i = 0; i < time.length; i++) {
    if (time[i] === ":") {
      clock.forEach((row,idx) => {
        if (idx === 2 || idx === 4) {
          row.push("*")
        } else row.push(" ")
      })
      clock.forEach(row => row.push(" "))
      continue
    }

    const timeNumber = parseInt(time[i])
    for (let j = 0; j < clock.length; j++) {
      clock[j].push(...numbers[timeNumber][j])
    }

    if (i !== 4) {
      clock.forEach(row => row.push(" "))
    }
  }

  return clock
}