import { formatRatio } from "../../../io"
import { Integer } from "../../rational"
import { computeLowestTermsRatio, Ratio } from "../ratio"
import { NumTypeParameters } from "../types"

const computeIntegerFromRatio = <T extends NumTypeParameters>(ratio: Ratio<T>): Integer<T> => {
    const [numerator, denominator] = computeLowestTermsRatio(ratio)

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer ratio ${formatRatio(ratio)}.`)
    }

    return numerator as Integer as Integer<T>
}

export {
    computeIntegerFromRatio,
}
