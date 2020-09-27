import { formatRatio } from "../../../../io"
import { NumTypeParameters, Ratio } from "../../../num"
import { Integer } from "../../types"
import { computeLowestTermsRatio } from "../ratio"

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
