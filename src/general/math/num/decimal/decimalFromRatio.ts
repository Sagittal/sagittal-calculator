import { RatioNotDefaultingToRational } from "../ratio"
import { NumTypeParameters } from "../types"
import { Decimal, DecimalNotDefaultingToPotentiallyIrrational } from "./types"

const computeDecimalFromRatio = <T extends NumTypeParameters>(
    [numerator, denominator]: RatioNotDefaultingToRational<T>,
): DecimalNotDefaultingToPotentiallyIrrational<T> => {
    return numerator / denominator as Decimal<T>
}

export {
    computeDecimalFromRatio,
}
