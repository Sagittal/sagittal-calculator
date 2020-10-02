import { isUndefined } from "../../../../code"
import { formatReal } from "../../../../io"
import { computeRealFromRealOrRealDecimal, computeRealQuotientFromRealMonzo, NumericProperties } from "../../../real"
import { RationalDecimal } from "../decimal"
import { Rational } from "../types"
import { computeRationalQuotientFromRationalDecimal } from "./fromDecimal"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { RationalQuotient } from "./types"

const computeRationalQuotientFromRational = <T extends NumericProperties>(
    rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
    options: { disableErrorBecauseExactValueNotRequired?: boolean } = {},
): RationalQuotient<T> => {
    const { monzo, quotient, decimal } = computeRealFromRealOrRealDecimal(rationalOrRationalDecimal)
    
    let rationalQuotient: RationalQuotient<T>
    if (!isUndefined(quotient)) {
        rationalQuotient = quotient
    } else if (!isUndefined(monzo)) {
        rationalQuotient = computeRealQuotientFromRealMonzo(monzo, options)
    } else if (!isUndefined(decimal)) {
        rationalQuotient = computeRationalQuotientFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute quotient from rational ${formatReal(rationalOrRationalDecimal)} but it had no numeric members.`)
    }

    return computeLowestTermsRationalQuotient(rationalQuotient)
}

export {
    computeRationalQuotientFromRational,
}
