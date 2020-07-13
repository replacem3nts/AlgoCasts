// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let travArr = [root, 's']
    let widths = [0]
    while(travArr.length > 1) {
        let nextItem = travArr.shift()
        if(nextItem === 's') {
            widths.push(0)
            travArr.push('s')
        } else {
            widths[widths.length - 1]++
            travArr.push(...nextItem.children)
        }
    }
    return widths
}

module.exports = levelWidth;
