// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) { 
    let aMap = buildCharMap(stringA)
    let bMap = buildCharMap(stringB)

    if (Object.keys(aMap).length !== Object.keys(bMap).length) {
        return false
    }

    for (let char in aMap) {
        if (aMap[char] !== bMap[char]) {
            return false
        } else {
            return true
        }
    }
}

function buildCharMap(str) {
    let charMap = {}

    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}

module.exports = anagrams;


// ---------------------------
// HIS LESS PRETTY SOLVE V1
// function anagrams(stringA, stringB) { 
//     let aMap = buildCharMap(stringA)
//     let bMap = buildCharMap(stringB)

//     if (Object.keys(aMap).length !== Object.keys(bMap).length) {
//         return false
//     }

//     for (let char in aMap) {
//         if (aMap[char] !== bMap[char]) {
//             return false
//         } else {
//             return true
//         }
//     }
// }

// function buildCharMap(str) {
//     let charMap = {}

//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1
//     }

//     return charMap
// }

// ---------------------------
// MY VERY PRETTY SOLVE
// function anagrams(stringA, stringB) { 
//     return cleaner(stringA) === cleaner(stringB)
// }

// function cleaner(string) {
//     return string
//         .toLowerCase()
//         .replace(/\W/g, '')
//         .split('')
//         .sort()
//         .join('')
// }