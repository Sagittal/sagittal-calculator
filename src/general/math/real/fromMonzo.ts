import { Integer, IntegerMonzo, Rational, RationalMonzo } from "../rational"
import { RealMonzo } from "./monzo"
import { NumericProperties, Real } from "./types"

const computeRealFromRealMonzo: {
    <T extends NumericProperties>(monzo: IntegerMonzo<T>): Integer<T>
    <T extends NumericProperties>(monzo: RationalMonzo<T>): Rational<T>
    <T extends NumericProperties>(monzo: RealMonzo<T>): Real<T>,
} = <T extends NumericProperties>(monzo: RealMonzo<T>): any =>
    ({ monzo })

export {
    computeRealFromRealMonzo,
}
