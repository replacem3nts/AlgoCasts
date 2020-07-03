// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
    let cache = {}
    return function(...args) {
        if(cache[args]) {
            return cache[args]
        }
        let result = fn.apply(this, args)
        cache[args] = result

        return result
    }
}

function slowFib(n) {
    if(n < 2) {
        return n
    }

    return fib(n - 1) + fib(n - 2) 
}

let fib = memoize(slowFib)

module.exports = fib;

// HIST RECURSIVE - RUNTIME EXPONETIAL (2^N)
// function fib(n) {
//     if(n < 2) {
//         return n
//     }

//     return fib(n - 1) + fib(n - 2) 
// }
// HIS ITERATIVE - RUNTIME IS LINEAR
// function fib(n) {
//     let result = [0, 1]

//     for(let i = 2; i <= n; i++) {
//         let a = result[i - 1]
//         let b = result[i - 2]
//         result.push(a + b)
//     }

//     return result[n]
// }
// MY ITERATIVE - RUNTIME IS LINEAR
// function fib(n) {
//     let fibArr = [0, 1]
//     for(let i = 0; i < n; i++) {
//         fibArr.push(fibArr[i] + fibArr[i + 1])
//     }
//     return fibArr[n]
// }