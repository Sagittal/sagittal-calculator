import { isUndefined } from "../../../../code"
import { formatNum } from "../../../../io"
import { computeQuotientFromMonzo, NumTypeParameters } from "../../../num"
import { RationalNum } from "../types"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { computeRationalQuotientFromRationalDecimal } from "./quotientFromRationalDecimal"
import { RationalQuotient } from "./types"

const computeRationalQuotientFromRationalNum = <T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
    options: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): RationalQuotient<T> => {
    const { monzo, quotient, decimal } = rationalNum

    let rationalQuotient: RationalQuotient<T>
    if (!isUndefined(quotient)) {
        rationalQuotient = quotient
    } else if (!isUndefined(monzo)) {
        rationalQuotient = computeQuotientFromMonzo(monzo, options)
    } else if (!isUndefined(decimal)) {
        rationalQuotient = computeRationalQuotientFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute quotient from rational num ${formatNum(rationalNum)} but it had no numeric members.`)
    }

    return computeLowestTermsRationalQuotient(rationalQuotient)
}

export {
    computeRationalQuotientFromRationalNum,
}
