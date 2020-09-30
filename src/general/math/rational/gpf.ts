import { NumericProperties } from "../real"
import { Max } from "../types"
import { computeRationalSmoothness, IntegerDecimal, Rational, RationalDecimal } from "./real"
import { Prime } from "./types"

// Greatest Prime Factor

const computeGpf = <T extends NumericProperties>(
    rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
): Max<Prime<T>> =>
    computeRationalSmoothness(rationalOrRationalDecimal) as IntegerDecimal as Max<Prime<T>>

export {
    computeGpf,
}
