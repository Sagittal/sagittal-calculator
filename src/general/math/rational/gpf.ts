import { NumTypeParameters } from "../num"
import { Max } from "../types"
import { computeRatioSmoothness, IntegerDecimal, Ratio, RationalDecimal } from "./num"
import { Prime } from "./types"

// Greatest Prime Factor

const computeGpf = <T extends NumTypeParameters>(
    ratioOrRationalDecimal: Ratio<T> | RationalDecimal<T>,
): Max<Prime<T>> =>
    computeRatioSmoothness(ratioOrRationalDecimal) as IntegerDecimal as Max<Prime<T>>

export {
    computeGpf,
}
