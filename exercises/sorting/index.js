// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let lesser = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = lesser
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        let indOfMin = i
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[indOfMin] > arr[j]) {
                indOfMin = j
            }
        }
        if(indOfMin !== i) {
            let minVal = arr[indOfMin]
            arr[indOfMin] = arr[i]
            arr[i] = minVal
        }
    }
    return arr
}

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr
    }

    let center = Math.floor(arr.length / 2)
    let left = arr.slice(0, center)
    let right = arr.slice(center)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
    let results = []

    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }

    return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
