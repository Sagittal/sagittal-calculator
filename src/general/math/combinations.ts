import { deepClone, shallowClone } from "../code"
import { Count } from "../types"
import { Integer } from "./rational"
import { count } from "./typedOperations"
import { Combination, Combinations } from "./types"

const computeCombinations = <T>(
    array: T[],
    comboCount: Count<T>,
    { withRepeatedElements = false }: { withRepeatedElements?: boolean } = {},
): Combinations<T> => {
    if (withRepeatedElements) {
        return computeCombinationsWithRepetitions(array, comboCount)
    }

    const combinations: number[][] = []

    if (comboCount === 0) {
        return [] as unknown[] as Combinations<T>
    }

    const computeRecursiveCombinations = (integer: Integer, combination: number[]): void => {
        if (combination.length === comboCount) {
            combinations.push(shallowClone(combination))

            return
        }

        if (combination.length + array.length - integer + 1 < comboCount) {
            return
        }

        computeRecursiveCombinations(integer + 1 as Integer, combination)
        combination.push(integer)
        computeRecursiveCombinations(integer + 1 as Integer, combination)
        combination.pop()
    }

    computeRecursiveCombinations(1 as Integer, [])

    return combinations.map((combination: number[]): Combination<T> => {
        return combination.map((index: number): T => {
            return array[ index - 1 ] as T
        }) as Combination<T>
    }) as Combinations<T>
}

const computeCombinationsWithRepetitions = <T>(array: T[], comboCount: Count<T>): Combinations<T> => {
    if (comboCount === void 0) {
        comboCount = count(array)
    }
    const data = Array(comboCount) as Combination<T>
    const results = [] as unknown[] as Combinations<T>
    const computeCombinationsWithRepetitionsRecursively = (position: number, start: number): void => {
        if (position === comboCount) {
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
