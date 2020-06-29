// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let matches = str.match(/[aeiou]/gi)
    return !!matches ? matches.length : 0
}

module.exports = vowels;

// His iterative solve
// function vowels(str) {
//     let count = 0
//     let vowelsArr = ['a', 'e', 'i', 'o', 'u']

//     for(let char of str.toLowerCase()){
//         if (vowelsArr.includes(char)) {
//             count++
//         }
//     }
//     return count
// }

// MY ITERATIVE
// function vowels(str) {
//     let vowelsArr = ['a', 'e', 'i', 'o', 'u']
//     let foundVowels = str.toLowerCase().split('').filter(char => vowelsArr.includes(char))
//     return foundVowels.length
// }

// MY REGEX
// function vowels(str) {
//     let foundVowels = str.toLowerCase().match(/[aeiou]/g) || []
//     return foundVowels.length
// }