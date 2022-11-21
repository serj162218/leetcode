let findRoad = function (maze) {
    let road = [];
    helper(maze, road, 0, 0);
    return road;
}

let helper = function (maze, road, i, j) {
    if (i == maze.length - 1 && j == maze[i].length - 1) return true;

    /**
     * i+1 S
     * i-1 N
     * j+1 E
     *j-1 W
     */

    if (j < maze[i].length - 1 && maze[i][j + 1] !== 0) {
        maze[i][j + 1] = 0;
        road.push("E");
        if (helper(maze, road, i, j + 1) == true) return true;
    }
    if (i < maze.length - 1 && maze[i + 1][j] !== 0) {
        maze[i + 1][j] = 0;
        road.push("S");
        if (helper(maze, road, i + 1, j) == true) return true;
    }
    if (i > 0 && maze[i - 1][j] !== 0 && !(i == 1 && j == 0)) {
        maze[i - 1][j] = 0;
        road.push("N");
        if (helper(maze, road, i - 1, j) == true) return true;
    }
    if (j > 0 && maze[i][j - 1] !== 0 && !(i == 0 && j == 1)) {
        maze[i][j - 1] = 0;
        road.push("W");
        if (helper(maze, road, i, j - 1) == true) return true;
    }
    road.pop();
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
// console.log(findRoad(maze));
// console.log(findRoad(maze2));
// console.log(findRoad(maze3));
// console.log(findRoad(maze4));
console.log(findRoad(maze5));