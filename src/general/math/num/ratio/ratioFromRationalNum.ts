import { isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { RationalNum } from "../../rational"
import { NumTypeParameters } from "../types"
import { computeLowestTermsRatio } from "./lowestTerms"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeRatioFromRationalDecimal } from "./ratioFromRationalDecimal"
import { Ratio } from "./types"

const computeRatioFromRationalNum = <T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
): Ratio<T> => {
    const { monzo, ratio, decimal } = rationalNum

    let outputRatio: Ratio<T>
    if (!isUndefined(ratio)) {
        outputRatio = ratio
    } else if (!isUndefined(monzo)) {
        outputRatio = computeRatioFromMonzo(monzo)
    } else if (!isUndefined(decimal)) {
        outputRatio = computeRatioFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute ratio from rational num ${formatNum(rationalNum)} but it had no numeric members.`)
    }

    return computeLowestTermsRatio(outputRatio)
}

export {
    computeRatioFromRationalNum,
}
