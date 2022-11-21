/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let a = 0;
    let flag = false;
    if(x < 0){
        flag = true;
        x *= -1;
    }
    while (x) {
        a = a * 10 + x % 10;
        x = Math.floor(x/10);
    }
    if(flag){
        a *= -1;
    }
    a = parseInt(a);
    return (a|0) === a ? a : 0;
};
console.log(reverse(1534236469));
console.log(reverse(123456));
console.log(reverse(-123456));