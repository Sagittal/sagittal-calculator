import { computeTrimmedArray, isUndefined } from "../../../../code"
import { formatReal } from "../../../../io"
import { computeRealFromRealOrDecimal, NumericProperties } from "../../../real"
import { RationalDecimal } from "../decimal"
import { Rational } from "../types"
import { computeRationalMonzoFromRationalDecimal } from "./fromDecimal"
import { computeRationalMonzoFromRationalQuotient } from "./fromQuotient"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRational = <T extends NumericProperties>(
    rationalOrRationalDecimal: Rational<T> | RationalDecimal<T>,
): RationalMonzo<T> => {
    const { monzo, quotient, decimal } = computeRealFromRealOrDecimal(rationalOrRationalDecimal)

    let rationalMonzo: RationalMonzo<T>
    if (!isUndefined(monzo)) {
        rationalMonzo = monzo
    } else if (!isUndefined(quotient)) {
        rationalMonzo = computeRationalMonzoFromRationalQuotient(quotient)
    } else if (!isUndefined(decimal)) {
        rationalMonzo = computeRationalMonzoFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute monzo from rational ${formatReal(rationalOrRationalDecimal)} but it had no numeric members.`)
    }

    return computeTrimmedArray(rationalMonzo)
}

export {
    computeRationalMonzoFromRational,
}
