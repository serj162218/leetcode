/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case ")":
                if (stack.length < 1 || stack.pop() !== "(") return false;
                break;
            case "]":
                if (stack.length < 1 || stack.pop() !== "[") return false;
                break;
            case "}":
                if (stack.length < 1 || stack.pop() !== "{") return false;
                break;
            default:
                stack.push(s[i]);
                break;
        }
    }
    if (stack.length > 0) return false;
    return true;
};

let s;
s = "(";
console.log(isValid(s));
s = "()[]{}"
console.log(isValid(s));
s = "(]"
console.log(isValid(s));