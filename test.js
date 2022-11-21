var rotate = function (matrix) {
    let level = 0;
    let maxLevel = Math.floor(matrix.length / 2);
    let last = matrix.length - 1;
    while (level < maxLevel) {
        for (let i = level; i < last; i++) {
            [matrix[level][i], matrix[i][last]] = [matrix[i][last], matrix[level][i]];
            [matrix[level][i], matrix[last][last - i + level]] = [matrix[last][last - i + level], matrix[level][i]];
            [matrix[level][i], matrix[last - i + level][level]] = [matrix[last - i + level][level], matrix[level][i]];
        }
        level++;
        last--;
    }
};

rotate([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]);