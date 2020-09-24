import { Decimal, DecimalNotDefaultingToPotentiallyIrrational, NumTypeParameters } from "../../types"
import { RatioNotDefaultingToRational } from "./types"

const computeDecimalFromRatio = <T extends NumTypeParameters>(
    [numerator, denominator]: RatioNotDefaultingToRational<T>,
): DecimalNotDefaultingToPotentiallyIrrational<T> => {
    return numerator / denominator as Decimal<T>
}

export {
    computeDecimalFromRatio,
}
