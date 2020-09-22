import { formatRatio } from "../../../io"
import { Integer, IntegerTypeParameters } from "../types"
import { computeLowestTermsRatio } from "./lowestTerms"
import { Ratio } from "./types"

const computeIntegerFromRatio = <T extends IntegerTypeParameters>(ratio: Ratio<T>): Integer<T> => {
    const [numerator, denominator] = computeLowestTermsRatio(ratio)

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer ratio ${formatRatio(ratio)}.`)
    }

    return numerator as Integer as Integer<T>
}

export {
    computeIntegerFromRatio,
}
