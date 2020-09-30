import { Integer, IntegerQuotient, Rational, RationalQuotient } from "../rational"
import { Quotient } from "./quotient"
import { NumericProperties, Real } from "./types"

const computeRealFromQuotient: {
    <T extends NumericProperties>(quotient: IntegerQuotient<T>): Integer<T>,
    <T extends NumericProperties>(quotient: RationalQuotient<T>): Rational<T>,
    <T extends NumericProperties>(quotient: Quotient<T>): Real<T>,
} = <T extends NumericProperties>(quotient: Quotient<T>): any =>
    ({ quotient })

export {
    computeRealFromQuotient,
}
