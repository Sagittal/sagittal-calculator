import { Decimal } from "../decimal"
import { computeRatioFromRationalDecimal } from "../ratio"
import { NumTypeParameters } from "../types"
import { computeMonzoFromRatio } from "./monzoFromRatio"
import { Monzo } from "./types"

const computeMonzoFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: Decimal<T & { potentiallyIrrational: false }>,
): Monzo<T> => {
    const ratio = computeRatioFromRationalDecimal(rationalDecimal)

    return computeMonzoFromRatio(ratio) as Monzo<T>
}

export {
    computeMonzoFromRationalDecimal,
}
