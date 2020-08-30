import { deepClone, shallowClone } from "../code"
import { Count } from "../types"
import { Combination, Combinations, Integer } from "./types"

const computeCombinations = <T>(
    array: T[],
    count: Count<T>,
    { withRepeatedElements = false } = {},
): Combinations<T> => {
    if (withRepeatedElements) {
        return computeCombinationsWithRepetitions(array, count)
    }

    const combinations: number[][] = []

    if (count === 0) {
        return [] as unknown[] as Combinations<T>
    }

    const computeRecursiveCombinations = (integer: Integer, combination: number[]) => {
        if (combination.length === count) {
            combinations.push(shallowClone(combination))

            return
        }

        if (combination.length + array.length - integer + 1 < count) {
            return
        }

        computeRecursiveCombinations(integer + 1 as Integer, combination)
        combination.push(integer)
        computeRecursiveCombinations(integer + 1 as Integer, combination)
        combination.pop()
    }

    computeRecursiveCombinations(1 as Integer, [])

    return combinations.map(combination =>
        combination.map(index =>
            array[ index - 1 ])) as Combinations<T>
}

const computeCombinationsWithRepetitions = <T>(array: T[], count: Count<T>): Combinations<T> => {
    if (count === void 0) {
        count = array.length as Count<T>
    }
    const data = Array(count) as Combination<T>
    const results = [] as unknown[] as Combinations<T>
    const computeCombinationsWithRepetitionsRecursively = (position: number, start: number) => {
        if (position === count) {
            results.push(shallowClone(data) as Combination<T>)
            return
        }
        for (let index = start; index < array.length; ++index) {
            data[ position ] = deepClone(array[ index ])
            computeCombinationsWithRepetitionsRecursively(position + 1, index)
        }
    }
    computeCombinationsWithRepetitionsRecursively(0, 0)

    return results as Combinations<T>
}

export {
    computeCombinations,
    computeCombinationsWithRepetitions,
}
