// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    switch(n) {
        case row:
            return
        case stair.length:
            console.log(stair)
            steps(n, row += 1)
            return
        default:
            stair.length <= row ? stair += '#' : stair += ' '
            steps(n, row, stair)
    }
}

module.exports = steps;

// MY HALF RECURSIVE SOLVE
// function steps(n, row = 0) {
//     if(n === row) {
//         return
//     }

//     let stair = ''
//     for(let i = 0; i < n; i++) {
//         i <= row ? stair += '#' : stair += ' ' 
//     }

//     console.log(stair)
//     steps(n, row += 1)
// }

// HIS V1 SOLVE
// function steps(n) {
//     for(let row = 0; row < n; row++) {
//         let stair = ''
//         for(let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#'
//             } else {
//                 stair += ' '
//             }
//         }
//         console.log(stair)
//     }
// }

// MY SOLVE
// function steps(n) {

//     for(let i = 0; i < n; i++) {
//         let string = ''
//         for(let y = 0; y < n; y++) {
//             y > i ? string += ' ' : string += '#'
//         }
//         console.log(string)
//     }
// }
