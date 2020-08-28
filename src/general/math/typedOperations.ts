import { computeIsEmpty, isUndefined } from "../code"
import { Count } from "../types"
import {
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS,
} from "./constants"
import { Base, Exponent, Integer, Max, Min, Power } from "./types"

const count = <T>(array: T[]): Count<T> => {
    return array.length as Count<T>
}

const sum = <T extends number>(...numbers: T[]): T => {
    if (computeIsEmpty(numbers)) {
        return ADDITIVE_IDENTITY as T
    }

    const previousValue: T = numbers.pop() as T

    const nextSum: T = computeIsEmpty(numbers) ?
        ADDITIVE_IDENTITY as T :
        sum(...numbers)

    return nextSum + (previousValue) as T
}

const difference = <T extends number>(minuend: T, subtrahend: T): T =>
    minuend - subtrahend as T

const product = <T extends number>(...numbers: T[]): T => {
    if (computeIsEmpty(numbers)) {
        return MULTIPLICATIVE_IDENTITY as T
    }

    const previousValue: T = numbers.pop() as T

    const nextProduct: T = computeIsEmpty(numbers) ?
        MULTIPLICATIVE_IDENTITY as T :
        product(...numbers)

    return nextProduct * previousValue as T
}

const quotient = <T extends number>(dividend: T, divisor: T): T =>
    dividend / divisor as T

const integerDivide = <T extends number>(dividend: T, divisor: T): T & Integer =>
    floor(dividend / divisor) as T & Integer

const mod = <T extends number>(dividend: T, divisor: T): Omit<T, "_IntegerBrand"> =>
    dividend % divisor as unknown as Omit<T, "_IntegerBrand">

const reciprocal = <T extends number>(number: T): Omit<T, "_IntegerBrand"> =>
    1 / number as unknown as Omit<T, "_IntegerBrand">

const negative = <T extends number>(number: T): T =>
    number === 0 ? 0 as T : -number as T

const round = <T extends number>(number: T, precision?: Integer): T => {
    if (isUndefined(precision)) {
        return Math.round(number) as T & Integer
    }

    if (abs(number) < VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS) {
        return 0 as T
    }

    return +(Math.round(`${String(number)}e+${String(precision)}` as unknown as number) + "e-" + String(precision)) as T
}

const floor = <T extends number>(number: T): T & Integer =>
    Math.floor(number) as T & Integer

const ceil = <T extends number>(number: T): T & Integer =>
    Math.ceil(number) as T & Integer

const abs = <T extends number>(number: T): T =>
    Math.abs(number) as T

const sqrt = <T extends number>(number: T): Omit<T, "_IntegerBrand"> =>
    Math.sqrt(number) as unknown as Omit<T, "_IntegerBrand">

const cubeRoot = <T extends number>(number: T): Omit<T, "_IntegerBrand"> =>
    Math.cbrt(number) as unknown as Omit<T, "_IntegerBrand">

const max = <T extends number>(...numbers: T[]): Max<T> =>
    Math.max(...numbers) as Max<T>

const min = <T extends number>(...numbers: T[]): Min<T> =>
    Math.min(...numbers) as Min<T>

const pow = <T extends number>(base: Base<T>, exponent: Exponent<T>): Power<T> =>
    Math.pow(base, exponent) as Power<T>

const log = <T extends number>(power: Power<T>, base: Base<T>): Exponent<T> =>
    Math.log(power) / Math.log(base) as Exponent<T>

export {
    sum,
    difference,
    product,
    quotient,
    mod,
    reciprocal,
    negative,
    round,
    floor,
    ceil,
    abs,
    sqrt,
    cubeRoot,
    max,
    min,
    pow,
    log,
    integerDivide,
    count,
}
