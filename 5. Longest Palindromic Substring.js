/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    if (s.length == 2 && s[0] === s[1]) return s;
    else if (s.length == 2) return s[0];
    let start = 0;
    let end = 0;
    let i = 1;
    while (i < s.length) {
        let left = i;
        let right = i;
        /**
         * to execute the string like "baaaac"
         * It need to expand left and right first to meet the first char which is not eqaual to "a"
         */
        while (left >= 0 && s[left] === s[i]) {
            left--;
        }
        while (right <= s.length - 1 && s[right] === s[i]) {
            right++;
        }
        /**
         * now the string is like "dabcbaf" OR "dabbaf"
         */
        while (left >= 0 && right < s.length) {
            if (s[left] !== s[right]) {
                break;
            }
            left--;
            right++;
        }

        left = left + 1;
        if (end - start < right - left) {
            end = right;
            start = left;
        }

        i++;
    }
    return s.substring(start, end);
};

console.log(longestPalindrome("cccd"));
console.log(longestPalindrome("dabcba"));
console.log(longestPalindrome("acbbcb"));