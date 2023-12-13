def get_index(original_word: str, current_index: int = 0):
    if current_index == len(original_word):
        return

    for i in range(len(original_word)):
        if i == current_index:
            continue

        word = list(original_word)
        word[current_index], word[i] = word[i], word[current_index]
        word = "".join(word)

        if word == word[::-1]:
            return [current_index, i]
    
    return get_index(original_word, current_index + 1)


def solution(word: str):
    if word == word[::-1]:
        return []
    result = get_index(word)
    return result


print(solution("anna"))
print(solution("abab"))
print(solution("aaababa"))
print(solution("caababa"))
