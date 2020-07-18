import { computeDeepClone } from "../code"
import { Count } from "../types"
import { Combination, Combinations } from "./types"

const computeCombinations = <T>(array: T[], count: Count<T>, { withRepeatedElements = false } = {}): Combinations<T> => {
    if (withRepeatedElements) {
        return computeCombinationsWithRepetitions(array, count)
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

const computeCombinationsWithRepetitions = <T>(array: T[], count: Count<T>): Combinations<T> => {
    if (count === void 0) {
        count = array.length as Count<T>
    }
    const data = Array(count) as Combination<T>
    const results = [] as unknown as Combinations<T>
    const computeCombinationsWithRepetitionsRecursively = (position: number, start: number) => {
        if (position === count) {
            results.push(data.slice() as Combination<T>)
            return
        }
        for (let index = start; index < array.length; ++index) {
            data[ position ] = computeDeepClone(array[ index ])
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
