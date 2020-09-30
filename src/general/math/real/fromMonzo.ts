import { Integer, IntegerMonzo, Rational, RationalMonzo } from "../rational"
import { Monzo } from "./monzo"
import { NumericProperties, Real } from "./types"

const computeRealFromMonzo: {
    <T extends NumericProperties>(monzo: IntegerMonzo<T>): Integer<T>
    <T extends NumericProperties>(monzo: RationalMonzo<T>): Rational<T>
    <T extends NumericProperties>(monzo: Monzo<T>): Real<T>,
} = <T extends NumericProperties>(monzo: Monzo<T>): any =>
    ({ monzo })

export {
    computeRealFromMonzo,
}
