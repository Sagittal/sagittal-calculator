import { isUndefined } from "../../code"
import { NumericProperties, Quotient } from "../../math"
import { Pitch } from "../pitch"

const isJi = <T extends NumericProperties>(
    candidateJiPitch: Pitch<T>,
): candidateJiPitch is Pitch<T & { rational: true }> =>
    isUndefined((candidateJiPitch as { scaler: Quotient }).scaler)

export {
    isJi,
}
