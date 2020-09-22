import { allElementsEqual, computeIsEmpty, computeIsSingleton } from "../../code"
import { Divisor } from "../../types"
import { abs, divide, mod } from "../typedOperations"
import { ONE } from "./constants"
import { CommonFunction, Integer } from "./types"

const computeLowestCommonMultipleOfTwoNumbers = (firstValue: Integer, secondValue: Integer): Integer =>
    abs(divide(
        firstValue * secondValue as Integer,
        computeGreatestCommonDivisor(firstValue, secondValue),
    )) as Integer

const computeGreatestCommonDivisorOfTwoNumbers = (firstValue: Integer, secondValue: Integer): Integer => {
    let output: Integer = firstValue
    let remainder: Integer = secondValue
    while (remainder) {
        const previousRemainder: Integer = remainder
        remainder = mod(output, remainder) as Integer
        output = previousRemainder
    }

    return output
}

const recurseCommon = (commonFunction: CommonFunction, ...integers: Integer[]): Integer => {
    if (computeIsSingleton(integers)) {
        return integers[ 0 ]
    }
    if (computeIsEmpty(integers)) {
        return ONE
    }

    const result: Integer = commonFunction(integers[ 0 ], integers[ 1 ])
    if (integers.length === 2) {
        return result
    }

    return recurseCommon(commonFunction, result, ...integers.slice(2))
}

const computeCommon = (integers: Integer[], commonFunction: CommonFunction): Integer => {
    if (computeIsEmpty(integers)) {
        return ONE
    }

    if (allElementsEqual(integers)) {
        return integers[ 0 ]
    }

    return recurseCommon(commonFunction, ...integers)
}

const computeLeastCommonMultiple = (...integers: Integer[]): Integer =>
    computeCommon(integers, computeLowestCommonMultipleOfTwoNumbers)

const computeGreatestCommonDivisor = <T extends Integer>(...integers: T[]): Divisor<T> =>
    computeCommon(integers, computeGreatestCommonDivisorOfTwoNumbers) as Divisor<T>

export {
    computeLeastCommonMultiple,
    computeGreatestCommonDivisor,
}
