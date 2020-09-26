import { RationalNumTypeParameters } from "../../rational"
import { Decimal } from "../decimal"
import { computeRatioFromRationalDecimal } from "../ratio"
import { computeMonzoFromRatio } from "./monzoFromRatio"
import { Monzo } from "./types"

const computeMonzoFromRationalDecimal = <T extends RationalNumTypeParameters>(
    rationalDecimal: Decimal<T & { potentiallyIrrational: false }>,
): Monzo<T> => {
    const ratio = computeRatioFromRationalDecimal(rationalDecimal)

    return computeMonzoFromRatio(ratio) as Monzo<T>
}

export {
    computeMonzoFromRationalDecimal,
}
