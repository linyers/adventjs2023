def solution(ornaments: str, height: int):
    result = []
    chars = ornaments * (height * 2)
    for i in range(1, height + 1):
        leafs = " ".join(chars[:i])
        result.append(" " * (height - i) + leafs + "\n")
        chars = chars[i:]
    result.append(" " * (height - 1) + "|")
    return "".join(result)


print(solution("x", 3))
