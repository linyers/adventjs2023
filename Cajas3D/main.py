def solution(size: int, symbol: str):
    bg_size = size - 2

    if bg_size < 0:
        return "#\n"
    
    top = " " * (size - 1) + "#" * size + "\n"
    center = "#" * size + symbol * bg_size + "#" + "\n"
    bottom = "#" * size + "\n"

    top_content = ""
    bottom_content = ""

    for i in range(bg_size):
        c = "#" + symbol * bg_size + "#" + symbol * i + "#" + "\n"
        top_content += " " * (bg_size - i) + c
        bottom_content += c[::-1]
    
    bottom_content = bottom_content[::-1]

    result = top + top_content + center + bottom_content + bottom

    return result


print(solution(20, "+"))