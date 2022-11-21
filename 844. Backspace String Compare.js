/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let helper = (str) => {
        let arr = [];
        [...str].forEach(e => {
            if(e != "#"){
                arr.push(e);
            }else{
                arr.pop();
            }
        });
        return arr.toString();
    }
    return helper(s) == helper(t);
};
let s, t;
s = "ab#c", t = "ad#c";
console.log(backspaceCompare(s, t));
s = "ab##", t = "c#d#"
console.log(backspaceCompare(s, t));
s = "a#d", t = "b"
console.log(backspaceCompare(s, t));