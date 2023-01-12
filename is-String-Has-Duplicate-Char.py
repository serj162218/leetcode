def isStringHasDuplicateChar(str):
    prev = plus = 0
    for i in str:
        plus |= 1 << ord(i) - 97
        if prev == plus:
            return True
        prev = plus
    return False

print(isStringHasDuplicateChar("qwertyuiopasdfghjk"))