// --- counts
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let spiralMatrix = []
    for (let i = 0; i < n; i++) {
        spiralMatrix.push([])
    }
    let counter = 1

    let startRow = 0
    let endRow = n - 1
    let startColumn = 0
    let endColumn = n - 1

    while(startColumn <= endColumn && startRow <= endRow) {
        for(let i = startColumn; i <= endColumn; i++) {
            spiralMatrix[startRow][i] = counter
            counter++
        }
        startRow++
        for(let x = startRow; x <= endRow; x++) {
            spiralMatrix[x][endColumn] = counter
            counter++
        }
        endColumn--
        for(let y = endColumn; y >= startColumn; y--) {
            spiralMatrix[endRow][y] = counter
            counter++
        }
        endRow--
        for(let z = endRow; z >= startRow; z--) {
            spiralMatrix[z][startColumn] = counter
            counter++
        }
        startColumn++
    }
    console.log(spiralMatrix)
    return spiralMatrix
}

module.exports = matrix;
