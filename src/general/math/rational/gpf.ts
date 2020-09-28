import { NumTypeParameters } from "../num"
import { Max } from "../types"
import { computeRatioSmoothness, IntegerDecimal, RationalParameter } from "./num"
import { Prime } from "./types"

// Greatest Prime Factor

const computeGpf = <T extends NumTypeParameters>(rationalParameter: RationalParameter<T>): Max<Prime<T>> =>
    computeRatioSmoothness(rationalParameter) as IntegerDecimal as Max<Prime<T>>

export {
    computeGpf,
}
