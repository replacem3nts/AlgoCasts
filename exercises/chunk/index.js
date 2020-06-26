// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // HIS ALT SOLVE (SIMILAR TO MINE, BUT NICER)
    let chunkedArr = []
    let index = 0

    while (index < array.length) {
        chunkedArr.push(array.slice(index, index + size))
        index += size
    }

    return chunkedArr
}

module.exports = chunk;

// HIS V1 SOLVE
// function chunk(array, size) {
//     let chunkedArr = []
//     for (let element of array) {
//         let last = chunkedArr[chunkedArr.length - 1]
//         if (!last || last.length === size) {
//             chunkedArr.push([element])
//         } else {
//             last.push(element)
//         }
//     }
//     return chunkedArr
// }

//MY INITIAL SOLVE
// function chunk(array, size) {
//     let chunkedArrArr = []
//     let lastIndx = 0
//     for(let i = 0; i < array.length; i++) {
//         if ((i + 1) % size === 0 || i === array.length - 1) {
//             chunkedArrArr.push(array.slice(lastIndx, i + 1))
//             lastIndx = i + 1
//         }
//     }
//     return chunkedArrArr
// }