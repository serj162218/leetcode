var mySqrt = function (x) {
    if (x === 0 || x === 1) return x;

    //binary search
    let start = 1;
    let end = x;
    let mid;
    while (1) {
        mid = Math.floor((start + end) / 2);
        if (mid <= x / mid && (mid + 1) > x / (mid + 1)) {
            return mid;
        } else if (mid * mid > x) {
            end = mid;
        } else {
            start = mid;
        }
    }
};

console.log(mySqrt(4));
console.log(mySqrt(36));
console.log(mySqrt(8));
console.log(mySqrt(9));
console.log(mySqrt(0));
console.log(mySqrt(1));