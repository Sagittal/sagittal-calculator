import { Integer, IntegerQuotient, Rational, RationalQuotient } from "../rational"
import { RealQuotient } from "./quotient"
import { NumericProperties, Real } from "./types"

const computeRealFromRealQuotient: {
    <T extends NumericProperties>(quotient: IntegerQuotient<T>): Integer<T>,
    <T extends NumericProperties>(quotient: RationalQuotient<T>): Rational<T>,
    <T extends NumericProperties>(quotient: RealQuotient<T>): Real<T>,
} = <T extends NumericProperties>(quotient: RealQuotient<T>): any =>
    ({ quotient })

export {
    computeRealFromRealQuotient,
}
