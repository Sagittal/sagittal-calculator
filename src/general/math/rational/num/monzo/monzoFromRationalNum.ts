import { computeTrimmedArray, isUndefined } from "../../../../code"
import { formatNum } from "../../../../io"
import { NumTypeParameters } from "../../../num"
import { RationalNum } from "../types"
import { computeRationalMonzoFromRationalQuotient } from "./monzoFromQuotient"
import { computeRationalMonzoFromRationalDecimal } from "./monzoFromRationalDecimal"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRationalNum = <T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
): RationalMonzo<T> => {
    const { monzo, quotient, decimal } = rationalNum
    let rationalMonzo: RationalMonzo<T>
    if (!isUndefined(monzo)) {
        rationalMonzo = monzo
    } else if (!isUndefined(quotient)) {
        rationalMonzo = computeRationalMonzoFromRationalQuotient(quotient)
    } else if (!isUndefined(decimal)) {
        rationalMonzo = computeRationalMonzoFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute monzo from rational num ${formatNum(rationalNum)} but it had no numeric members.`)
    }

    return computeTrimmedArray(rationalMonzo)
}

export {
    computeRationalMonzoFromRationalNum,
}
