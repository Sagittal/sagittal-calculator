import { isUndefined } from "../../../../code"
import { formatNum } from "../../../../io"
import { computeQuotientFromMonzo, NumTypeParameters } from "../../../num"
import { Ratio } from "../types"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { computeRationalQuotientFromRationalDecimal } from "./fromDecimal"
import { RationalQuotient } from "./types"

const computeRationalQuotientFromRatio = <T extends NumTypeParameters>(
    ratio: Ratio<T>,
    options: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): RationalQuotient<T> => {
    const { monzo, quotient, decimal } = ratio

    let rationalQuotient: RationalQuotient<T>
    if (!isUndefined(quotient)) {
        rationalQuotient = quotient
    } else if (!isUndefined(monzo)) {
        rationalQuotient = computeQuotientFromMonzo(monzo, options)
    } else if (!isUndefined(decimal)) {
        rationalQuotient = computeRationalQuotientFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute quotient from ratio ${formatNum(ratio)} but it had no numeric members.`)
    }

    return computeLowestTermsRationalQuotient(rationalQuotient)
}

export {
    computeRationalQuotientFromRatio,
}
