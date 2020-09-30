import { isUndefined, Precision } from "../code"
import { Addend, Count, Divisor, Multiplier, Product, Subtrahend, Sum } from "../types"
import {
    ADDITIVE_IDENTITY,
    MULTIPLICATIVE_IDENTITY, VALUE_ABOVE_WHICH_ROUNDING_IMPLEMENTATION_BREAKS,
    VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS,
} from "./constants"
import { IntegerDecimal, RationalDecimal } from "./rational"
import { NumericProperties, RealDecimal } from "./real"
import { Abs, Avg, Base, Exponent, Max, Min, Power } from "./types"

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

const add = <T extends number>(augend: T, addend: Addend<T> | T): T =>
    augend + addend as T                    // Sum

const subtract = <T extends number>(minuend: T, subtrahend: Subtrahend<T> | T): T =>
    minuend - subtrahend as T               // Difference

const multiply = <T extends number>(multiplicand: T, multiplier: Multiplier<T> | T): T => {
    return multiplicand * multiplier as T   // Product
}

const divide = <T extends number>(dividend: T, divisor: Divisor<T> | T): T => {
    return dividend / divisor as T          // Quotient
}

const mod: {
    <T extends NumericProperties>(dividend: IntegerDecimal<T>, divisor: IntegerDecimal<T>): RealDecimal<T>,
    <T extends NumericProperties>(dividend: RationalDecimal<T>, divisor: RationalDecimal<T>): RealDecimal<T>,
    <T extends NumericProperties>(dividend: RealDecimal<T>, divisor: RealDecimal<T>): RealDecimal<T>,
} = <T extends number>(dividend: T, divisor: T): any =>
    dividend % divisor

const reciprocal: {
    <T extends NumericProperties>(integerDecimal: IntegerDecimal<T>): RealDecimal<T>,
    <T extends NumericProperties>(rationalDecimal: RationalDecimal<T>): RealDecimal<T>,
    <T extends NumericProperties>(decimal: RealDecimal<T>): RealDecimal<T>,
} = <T extends RealDecimal>(decimal: T): any =>
    1 / decimal

const negative = <T extends number>(number: T): T =>
    number === 0 ? 0 as T : -number as T

const round = <T extends number>(number: T, precision?: Precision): T => {
    if (isUndefined(precision)) {
        return Math.round(number) as T & IntegerDecimal
    }
    
    if (abs(number) > VALUE_ABOVE_WHICH_ROUNDING_IMPLEMENTATION_BREAKS) {
        return number
    }

    if (abs(number) < VALUE_BELOW_WHICH_ROUNDING_IMPLEMENTATION_BREAKS) {
        return 0 as T
    }

    return +(Math.round(`${String(number)}e+${String(precision)}` as unknown as number) + "e-" + String(precision)) as T
}

const abs = <T extends number>(number: T): Abs<T> =>
    Math.abs(number) as Abs<T>

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  And anything like that using rational/integer should live in real/
//  Although I'm actually thinking in this case what we're looking for is in real/, a generic root helper
//  And here, it should be more like pow, log, etc. where there should be a ... well it should return a Power<T>
//  And that's really all...
const sqrt: {
    <T extends NumericProperties>(integerDecimal: IntegerDecimal<T>): RealDecimal<T>,
    <T extends NumericProperties>(rationalDecimal: RationalDecimal<T>): RealDecimal<T>,
    <T extends NumericProperties>(decimal: RealDecimal<T>): RealDecimal<T>,
} = <T extends NumericProperties>(decimal: RealDecimal<T>): any =>
    Math.sqrt(decimal)

const cubeRoot: {
    <T extends NumericProperties>(integerDecimal: IntegerDecimal<T>): RealDecimal<T>,
    <T extends NumericProperties>(rationalDecimal: RationalDecimal<T>): RealDecimal<T>,
    <T extends NumericProperties>(decimal: RealDecimal<T>): RealDecimal<T>,
} = <T extends NumericProperties>(decimal: RealDecimal<T>): any =>
    Math.cbrt(decimal)

const max = <T extends number>(...numbers: T[]): Max<T> =>
    Math.max(...numbers) as Max<T>

const min = <T extends number>(...numbers: T[]): Min<T> =>
    Math.min(...numbers) as Min<T>

const pow = <T extends number>(base: Base<T> | T, exponent: Exponent<T> | T): Power<T> =>
    Math.pow(base, exponent) as Power<T>

const log = <T extends number>(power: Power<T> | T, base: Base<T> | T = Math.E as Base<T>): Exponent<T> =>
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
    mod,
    reciprocal,
    negative,
    round,
    abs,
    sqrt,
    cubeRoot,
    max,
    min,
    pow,
    log,
    count,
    avg,
}
