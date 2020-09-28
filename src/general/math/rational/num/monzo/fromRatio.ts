import { computeTrimmedArray, isUndefined } from "../../../../code"
import { formatNum } from "../../../../io"
import { NumTypeParameters } from "../../../num"
import { Ratio } from "../types"
import { computeRationalMonzoFromRationalDecimal } from "./fromDecimal"
import { computeRationalMonzoFromRationalQuotient } from "./fromQuotient"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRatio = <T extends NumTypeParameters>(
    ratio: Ratio<T>,
): RationalMonzo<T> => {
    const { monzo, quotient, decimal } = ratio
    let rationalMonzo: RationalMonzo<T>
    if (!isUndefined(monzo)) {
        rationalMonzo = monzo
    } else if (!isUndefined(quotient)) {
        rationalMonzo = computeRationalMonzoFromRationalQuotient(quotient)
    } else if (!isUndefined(decimal)) {
        rationalMonzo = computeRationalMonzoFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute monzo from ratio ${formatNum(ratio)} but it had no numeric members.`)
    }

    return computeTrimmedArray(rationalMonzo)
}

export {
    computeRationalMonzoFromRatio,
}
