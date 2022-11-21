let findRoad = function (maze) {
    return helper(maze, 0, 0);
}

let helper = function (maze, i, j) {
    let road = [];
    let roadStr = "";
    maze[0][0] = 0;
    while (true) {
        if(i === maze.length - 1 && j  === maze[i].length - 1) break;
        if (i < maze.length - 1 && maze[i + 1][j] !== 0) {
            road.push([i, j]);
            roadStr += "S";
            maze[i + 1][j] = 0;
            i++;
        } else if (i > 0 && maze[i - 1][j] !== 0) {
            road.push([i, j]);
            roadStr += "N";
            maze[i - 1][j] = 0;
            i--;
        } else if (j < maze[i].length - 1 && maze[i][j + 1] !== 0) {
            road.push([i, j]);
            roadStr += "E";
            maze[i][j + 1] = 0;
            j++;
        } else if (j > 0 && maze[i][j - 1] !== 0) {
            road.push([i, j]);
            roadStr += "W";
            maze[i][j - 1] = 0;
            j--;
        } else {
            let tmp = road.pop();
            i = tmp[0];
            j = tmp[1];
            roadStr = roadStr.substring(0, roadStr.length - 1);
        }
    }
    return roadStr;
}

let maze = [
    [1, 1, 1, 1, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1],
]
let maze2 = [
    [1, 1, 1, 0, 1],
    [0, 1, 0, 0, 1],
    [0, 1, 1, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 1],
];
let maze3 = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
];
let maze4 = [
    [1, 0, 0, 0, 1],
    [1, 1, 1, 0, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
];
let maze5 = [
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 1, 0, 1],
    [0, 1, 1, 0, 1],
    [1, 1, 0, 0, 1],
];
console.log(findRoad(maze));
console.log(findRoad(maze2));
console.log(findRoad(maze3));
console.log(findRoad(maze4));
console.log(findRoad(maze5));