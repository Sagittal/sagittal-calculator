import { NumTypeParameters } from "../num"
import { Max } from "../types"
import { computeRatioSmoothness, IntegerDecimal, RatioOrRationalDecimal } from "./num"
import { Prime } from "./types"

// Greatest Prime Factor

const computeGpf = <T extends NumTypeParameters>(rationalParameter: RatioOrRationalDecimal<T>): Max<Prime<T>> =>
    computeRatioSmoothness(rationalParameter) as IntegerDecimal as Max<Prime<T>>

export {
    computeGpf,
}
