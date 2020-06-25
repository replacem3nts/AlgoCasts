// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let max = 0
    let maxChar = ''
    let charHash = {}

    for (let char of str) {charHash[char] ? charHash[char]++ : charHash[char] = 1}

    for (let char in charHash) {
        if(charHash[char] > max) {
            max = charHash[char]
            maxChar = char
        }
    }

    return maxChar
}

module.exports = maxChar;
