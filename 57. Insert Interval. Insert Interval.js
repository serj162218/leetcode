/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let arr = [];
    intervals.forEach((v) => {
        if (newInterval == null || v[1] < newInterval[0]) {
            arr.push(v);
        } else if (v[0] > newInterval[1]) {
            arr.push(newInterval);
            arr.push(v);
            newInterval = null;
        } else {
            newInterval[0] = Math.min(v[0], newInterval[0]);
            newInterval[1] = Math.max(v[1], newInterval[1]);
        }
    });
    if (newInterval != null) {
        arr.push(newInterval);
    }
    return arr;
};
let intervals;
let newInterval;
intervals = [[1, 3], [6, 9]], newInterval = [2, 5];
console.log(insert(intervals, newInterval));
intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]
console.log(insert(intervals, newInterval));
intervals = [[1, 5]], newInterval = [2, 3]
console.log(insert(intervals, newInterval));