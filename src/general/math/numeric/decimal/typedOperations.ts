import { NumericProperties } from "../types"
import { Decimal } from "./types"

const mod = <T extends NumericProperties>(dividend: Decimal<T>, divisor: Decimal<T>): Decimal<T & { integer: false }> =>
    dividend % divisor as Decimal<T>

const reciprocal = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & { integer: false }> =>
    1 / decimal as Decimal<T & { integer: false }>

const sqrt = <T extends NumericProperties>(decimal: Decimal<T>): Decimal<T & { integer: false }> =>
    Math.sqrt(decimal) as Decimal<T & { integer: false }>

export {
    mod,
    reciprocal,
    sqrt,
}
