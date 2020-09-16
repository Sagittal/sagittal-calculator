import { isUndefined } from "../code"
import { Addend, Count, Divisor, Multiplier, Product, Subtrahend, Sum } from "../types"
import {
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY,
    VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS,
} from "./constants"
import { Avg, Base, Exponent, Integer, Max, Min, Power } from "./types"

const parseInteger = (integerText: string): Integer => {
    return parseInt(integerText) as Integer
}

const count = <T>(array: T[]): Count<T> => {
    return array.length as Count<T>
}

const sum = <T extends number>(...addends: T[]): Sum<T> =>
    addends.reduce(
        (total: Sum<T>, addend: T): Sum<T> => total + addend as Sum<T>,
        ADDITIVE_IDENTITY as Sum<T>,
    )

const product = <T extends number>(...factors: T[]): Product<T> =>
    factors.reduce(
        (total: Product<T>, factor: T): Product<T> => total * factor as Product<T>,
        MULTIPLICATIVE_IDENTITY as Product<T>,
    )

const add = <T extends number>(augend: T, addend: T | Addend<T>): T =>
    augend + addend as T                    // sum

const subtract = <T extends number>(minuend: T, subtrahend: T | Subtrahend<T>): T =>
    minuend - subtrahend as T               // difference

const multiply = <T extends number>(multiplicand: T, multiplier: Multiplier<T>): T => {
    return multiplicand * multiplier as T   // product
}

const divide = <T extends number>(dividend: T, divisor: Divisor<T>): T => {
    return dividend / divisor as T          // quotient
}

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

const pow = <T extends number>(base: Base<T> | T, exponent: Exponent<T> | T): Power<T> =>
    Math.pow(base, exponent) as Power<T>

const log = <T extends number>(power: Power<T> | T, base: Base<T> | T): Exponent<T> =>
    Math.log(power) / Math.log(base) as Exponent<T>

const avg = <T extends number>(...numbers: T[]): Avg<T> =>
    sum(...numbers) / count(numbers) as Avg<T>

export {
    sum,
    product,
    add,
    subtract,
    multiply,
    divide,
    integerDivide,
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
    parseInteger,
    count,
    avg,
}
