class Solution {
    static encode(arr) {
        let str = "";
        for (let i of arr) {
            str += `${i.length}#${i}`;
        }
        return str;
    }
    static decode(str) {
        let arr = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let length = parseInt(str.substring(i, j));
            arr.push(str.substring(j + 1, j + 1 + length));
            i = i + j + length + 1;
        }
        return arr;
    }
}

let test;
test = ["1#2#abdc", "q2#we1#rt"];
test = Solution.encode(test);
console.log(test);
test = Solution.decode(test);
console.log(test);