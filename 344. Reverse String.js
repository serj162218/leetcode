/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let start = 0;
    let end = s.length-1;
    while(start < end){
        let j = s[start];
        s[start] = s[end];
        s[end] = j;
        start++;
        end--;
    }
    return s;
};

console.log(reverseString(["h","e","l","l","o"]));