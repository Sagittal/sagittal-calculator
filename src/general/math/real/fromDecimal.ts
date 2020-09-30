import { Integer, IntegerDecimal, Rational, RationalDecimal } from "../rational"
import { RealDecimal } from "./decimal"
import { NumericProperties, Real } from "./types"

const computeRealFromDecimal: {
    <T extends NumericProperties>(decimal: IntegerDecimal<T>): Integer<T>,
    <T extends NumericProperties>(decimal: RationalDecimal<T>): Rational<T>,
    <T extends NumericProperties>(decimal: RealDecimal<T>): Real<T>
} = <T extends NumericProperties>(decimal: RealDecimal<T>): any =>
    ({ decimal })

export {
    computeRealFromDecimal,
}
