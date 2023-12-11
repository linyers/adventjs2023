"""
10 gifts -> {x}
5 boxes -> [x]
rest gifts -> (xxxxx)
"""
import re

def solution(gifts: str) -> str:
    gifts = re.findall(r"\d+\w", gifts)
    result = ""

    for g in gifts:
        gift_number, gift_letter = int(g[:-1]), g[-1]
        pales = f"[{gift_letter}]" * (gift_number // 50)
        boxes = ("{" + gift_letter + "}") * (gift_number % 50 // 10)
        rest = ""
        if gift_number % 10 != 0:
            rest = "(" + gift_letter * (gift_number % 10) + ")"

        result += pales + boxes + rest

    return result

print(solution("20a"))