import { Decimal } from "../../types"
import { computeRatioFromRationalDecimal } from "../ratio"
import { RationalNumTypeParameters } from "../types"
import { computeMonzoFromRatio } from "./monzoFromRatio"
import { Monzo } from "./types"

const computeMonzoFromRationalDecimal = <T extends RationalNumTypeParameters>(
    rationalDecimal: Decimal<{ potentiallyIrrational: false }>,
): Monzo<T> => {
    const ratio = computeRatioFromRationalDecimal(rationalDecimal)

    return computeMonzoFromRatio(ratio) as Monzo<T>
}

export {
    computeMonzoFromRationalDecimal,
}
