// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// 00 01 02 03 04
// 10 11 12 13 14
// 20 21 22 23 24

function pyramid(n) {
    let midpoint = Math.floor((2 * n - 1) / 2)

    for(let row = 0; row < n; row++){
        let level = ''

        for(let column = 0; column < 2 * n - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) {
                level += '#'
            } else {
                level += ' '
            }
        }
        console.log(level)
    }
}


module.exports = pyramid;

// His iterative solve
// function pyramid(n) {
//     let midpoint = Math.floor((2 * n - 1) / 2)

//     for(let row = 0; row < n; row++){
//         let level = ''

//         for(let column = 0; column < 2 * n - 1; column++) {
//             if(midpoint - row <= column && midpoint + row >= column) {
//                 level += '#'
//             } else {
//                 level += ' '
//             }
//         }
//         console.log(level)
//     }
// }

// MY FAVORITE SOLVE
// function pyramid(n, row = 0) {
//     if(n === row) {
//         return
//     }

//     let spaceNo = n - row - 1
//     let hashNo = row * 2 + 1

//     let spaceArray = Array(spaceNo).fill(' ')
//     let hashArray = Array(hashNo).fill('#')

//     let stepArray = [...spaceArray, ...hashArray, ...spaceArray]
//     let step = stepArray.join('')
//     console.log(step)

//     pyramid(n, row += 1)
// }
// MY RECURSIVE SOLVE
// function pyramid(n, row = 0, step = '') {
//     if(n === row) {
//         return
//     }
//     let rowLength = n * 2 - 1
//     let spaceNo = n - row - 1

//     if(step.length === rowLength) {
//         console.log(step)
//         pyramid(n, row += 1)
//         return
//     }

//     if(step.length < rowLength) {
//         step.length < spaceNo || step.length >= (rowLength - spaceNo) ? step += ' ' : step += '#'
//         pyramid(n, row, step)
//     }
// }

// MY ITERATIVE SOLVE
// function pyramid(n) {
//     for(let row = 0; row < n; row++) {

//         let hashNo = row * 2 + 1
//         let hashes = elementBuilder('#', hashNo)

//         let spaceNo = n - row - 1
//         let spaces = elementBuilder(' ', spaceNo)

//         let step = spaces + hashes + spaces
//         console.log(step)
//     }
// }

// function elementBuilder(element, number) {
//     let result = ''
//     for(let y = 0; y < number; y++) {result += element}
//     return result
// }
