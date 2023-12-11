function drawGift(size: number, symbol: string): string {
  const bg_size = size - 2;

  if (bg_size < 0) return "#\n";

  const top = " ".repeat(size - 1) + "#".repeat(size) + "\n";
  const center = "#".repeat(size) + symbol.repeat(bg_size) + "#" + "\n";
  const bottom = "#".repeat(size) + "\n";

  let top_content = "";
  let bottom_content = "";

  for (let i = 0; i < bg_size; i++) {
    const c =
      "#" + symbol.repeat(bg_size) + "#" + symbol.repeat(i) + "#" + "\n";

    top_content += " ".repeat(bg_size - i) + c;
    bottom_content += c.split("").reverse().join("");
  }

  bottom_content = bottom_content.split("").reverse().join("");

  const result = top + top_content + center + bottom_content + bottom;

  return result;
}
