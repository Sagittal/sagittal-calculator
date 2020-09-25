import { isCloseTo } from "./isCloseTo"
import { isNumber, isUndefined } from "./typeGuards"
import { Precision } from "./types"

const deepEqualsArray = <T>(firstValue: T[], secondValue: T[], precision?: Precision): boolean =>
    firstValue instanceof Array &&
    firstValue.length === secondValue.length &&
    secondValue.every((el: T, index: number): boolean => deepEquals(el, firstValue[ index ], precision))

const deepEqualsObject = <T extends Record<string, unknown>>(
    firstValue: T,
    secondValue: T,
    precision?: Precision,
): boolean => {
    let equal

    if (firstValue instanceof Array) {
        equal = false
    } else if (typeof firstValue === "object") {
        equal = Object.keys(firstValue).length === Object.keys(secondValue).length &&
            Object.entries(secondValue)
                .every(([key, value]: [string, unknown]): boolean =>
                    deepEquals(value, firstValue[ key ], precision))
    } else {
        equal = false
    }

    return equal
}

const deepEquals = <T>(firstValue: T, secondValue: T, precision?: Precision): boolean => {
    let equal = false

    if (firstValue === secondValue) {
        equal = true
    } else if (!isUndefined(precision) && isNumber(firstValue) && isNumber(secondValue)) {
        equal = isCloseTo(firstValue, secondValue, precision)
    } else if (firstValue instanceof Array) {
        equal = deepEqualsArray(secondValue as T & unknown[], firstValue as T & unknown[], precision)
    } else if (typeof firstValue === "object") {
        equal = deepEqualsObject(
            secondValue as T & Record<string, unknown>,
            firstValue as T & { [ index: string ]: unknown },
            precision,
        )
    }

    return equal
}

export {
    deepEquals,
}
