let arr = [];

let level = 2;
const LEVELS = 10;

for ( let i = 0; i < LEVELS; i++ ) {
    arr[i] = Array(i+1);
}

arr[0][0] = 1;
arr[1][0] = 1;
arr[1][1] = 1;

for ( let i = 2; i < LEVELS; i++ ) {
    for ( let j = 0; j <= level; j++ ) {
        arr[i][j] = 1;
    }
    level++;
}

level = 2;

for ( let i = 2; i < LEVELS; i++ ) {
    for ( let j = 1; j < level; j++ ) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j];
    }
    level++;
}

level = 0;

for ( let i = 0; i < LEVELS; i++ ) {
    for ( let j = 0; j < level; j++ ) {
        document.write(arr[i][j] + " ");
        if (j == level-1)
        document.write("<br>");
    }
    level++;
}

console.log(arr);