/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let flag = false;
    let start = 1;
    let end = n;
    let mid = Math.floor((start + end) / 2);
    while (!flag) {
        switch (guess(mid)) {
            case -1:
                end = mid-1;
                mid = Math.floor((start + end) / 2);
                break;
            case 1:
                start = mid+1;
                mid = Math.ceil((start + end) / 2);
                break;
            case 0:
                flag = true;
                break;
        }
    }
    return mid;
};
var guess = function (n) {
    let pick = 1;
    if (n > pick) {
        return -1;
    } else if (n < pick) {
        return 1;
    } else {
        return 0;
    }
}