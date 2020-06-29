// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let newStr = str[0].toUpperCase()

    for(let i = 1; i < str.length; i++) {
        if(str[i - 1] === ' ') {
            newStr += str[i].toUpperCase()
        } else {
            newStr += str[i]
        }
    }

    return newStr
}

module.exports = capitalize;

// His v1 Solve
// function capitalize(str) {
//     let wordArr = []

//     for (let word of str.split(' ')) {
//         wordArr.push(word[0].toUpperCase() + word.slice(1))
//     }

//     return wordArr.join(' ')
// }

// function capitalize(str) {
//     let wordArr = str.split(' ')
//     let capWordArr = wordArr.map((word, i) => {
//         let capWord = strCap(word)
//         i === wordArr.length - 1 ? null : capWord = capWord + ' '
//         return capWord
//     })
//     let result  = capWordArr.join('')
//     return result
// }

// function strCap(str) {
//     let strArr = str.split('')
//     let firstLetter = strArr.shift().toUpperCase()
//     strArr.unshift(firstLetter)
//     let capitalized = strArr.join('')
//     return capitalized
// }