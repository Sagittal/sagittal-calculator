import { computeDeepClone } from "../code"
import { Count } from "../types"
import { Combinations } from "./types"

const computeCombinations = <T>(array: T[], count: Count<T>, { withRepeatedElements = false } = {}): Combinations<T> => {
    if (withRepeatedElements) {
        // @ts-ignore
        return combRep(array, count)
    }

    const combinations: number[][] = []

    if (count === 0) {
        return [] as unknown as Combinations<T>
    }

    const computeRecursiveCombinations = (integer: number, combination: number[]) => {
        if (combination.length === count) {
            combinations.push(combination.slice())

            return
        }

        if (combination.length + array.length - integer + 1 < count) {
            return
        }

        computeRecursiveCombinations(integer + 1, combination)
        combination.push(integer)
        computeRecursiveCombinations(integer + 1, combination)
        combination.pop()
    }

    computeRecursiveCombinations(1, [])

    return combinations.map(combination =>
        combination.map(index =>
            array[ index - 1 ])) as Combinations<T>
}

// todo obviously this is a mess but necessary to not crash at >18 things combining or choosing >6 things

// const computeCombinationsWithRepetitions = <T>(array: T[], count: Count): Combinations<T> => {
//     const comb = <U>(n: number, ys: U[][]): Combinations<U> => {
//         if (0 === n) {
//             return ys as Combinations<U>
//         }
//         if (isNull(ys)) {
//             return comb(n - 1, map(pure, array as unknown as U[]))
//         }
//
//         return comb(n - 1, concatMap((zs: U[]) => {
//             const h = head(zs)
//
//             return map((x: U) => [x].concat(zs), dropWhile(x => x !== h, array as unknown as U[]))
//         }, ys))
//     }
//
//     return comb(count, [] as unknown as Combinations<T>)
// }
//
// const concatMap = <T, U>(f: (g: T) => U[], array: T[]): U[] =>
//     ([] as U[]).concat.apply([] as T[], array.map(f))
//
// const dropWhile = <T>(p: (q: T) => boolean, array: T[]): T[] => {
//     let i = 0
//     for (const lng = array.length; (i < lng) && p(array[ i ]); i++) {
//     }
//
//     return array.slice(i)
// }
//
// const head = <T>(array: T[]): T | undefined => array.length ? array[ 0 ] : undefined
//
// const isNull = <T>(array: T[]): boolean => array instanceof Array ? array.length < 1 : false
//
// const map = <T, U>(f: (g: T) => U, array: T[]): U[] => array.map(f)
//
// const pure = <T>(x: T): T[] => [x]

// @ts-ignore
function combRep(arr, l) {
    if(l === void 0) l = arr.length; // Length of the combinations
    var data = Array(l),             // Used to store state
        results = [];                // Array of results
    (function f(pos, start) {        // Recursive function
        if(pos === l) {                // End reached
            results.push(data.slice());  // Add a copy of data to results
            return;
        }
        for(var i=start; i<arr.length; ++i) {
            data[pos] = computeDeepClone(arr[i]);          // Update data
            f(pos+1, i);                 // Call f recursively
        }
    })(0, 0);                        // Start at index 0
    return results;                  // Return results
}

export {
    computeCombinations,
    combRep,
}
