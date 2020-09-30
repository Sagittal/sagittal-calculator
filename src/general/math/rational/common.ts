import { allElementsEqual, isEmpty, isSingleton } from "../../code"
import { Divisor } from "../../types"
import { abs, divide, mod } from "../typedOperations"
import { ONE } from "./constants"
import { IntegerDecimal } from "./real"
import { CommonFunction } from "./types"

const computeLowestCommonMultipleOfTwoNumbers = (
    firstValue: IntegerDecimal,
    secondValue: IntegerDecimal,
): IntegerDecimal =>
    abs(divide(
        firstValue * secondValue as IntegerDecimal,
        computeGreatestCommonDivisor(firstValue, secondValue),
    )) as IntegerDecimal

const computeGreatestCommonDivisorOfTwoNumbers = (
    firstValue: IntegerDecimal,
    secondValue: IntegerDecimal,
): IntegerDecimal => {
    let output: IntegerDecimal = firstValue
    let remainder: IntegerDecimal = secondValue
    while (remainder) {
        const previousRemainder: IntegerDecimal = remainder
        remainder = mod(output, remainder) as IntegerDecimal
        output = previousRemainder
    }

    return output
}

const recurseCommon = (commonFunction: CommonFunction, ...integers: IntegerDecimal[]): IntegerDecimal => {
    if (isSingleton(integers)) {
        return integers[ 0 ]
    }
    if (isEmpty(integers)) {
        return ONE
    }

    const result: IntegerDecimal = commonFunction(integers[ 0 ], integers[ 1 ])
    if (integers.length === 2) {
        return result
    }

    return recurseCommon(commonFunction, result, ...integers.slice(2))
}

const computeCommon = (integers: IntegerDecimal[], commonFunction: CommonFunction): IntegerDecimal => {
    if (isEmpty(integers)) {
        return ONE
    }

    if (allElementsEqual(integers)) {
        return integers[ 0 ]
    }

    return recurseCommon(commonFunction, ...integers)
}

const computeLeastCommonMultiple = (...integers: IntegerDecimal[]): IntegerDecimal =>
    computeCommon(integers, computeLowestCommonMultipleOfTwoNumbers)

const computeGreatestCommonDivisor = <T extends IntegerDecimal>(...integers: T[]): Divisor<T> =>
    computeCommon(integers, computeGreatestCommonDivisorOfTwoNumbers) as Divisor<T>

export {
    computeLeastCommonMultiple,
    computeGreatestCommonDivisor,
}
