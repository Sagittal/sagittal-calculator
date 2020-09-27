import { Decimal, Monzo, NumTypeParameters } from "../../../num"
import { computeRatioFromRationalDecimal } from "../ratio"
import { computeMonzoFromRatio } from "./monzoFromRatio"

const computeMonzoFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: Decimal<T & { potentiallyIrrational: false }>,
): Monzo<T> => {
    const ratio = computeRatioFromRationalDecimal(rationalDecimal)

    return computeMonzoFromRatio(ratio) as Monzo<T>
}

export {
    computeMonzoFromRationalDecimal,
}
