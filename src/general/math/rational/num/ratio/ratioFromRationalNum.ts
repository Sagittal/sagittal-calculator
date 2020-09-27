import { isUndefined } from "../../../../code"
import { formatNum } from "../../../../io"
import { computeRatioFromMonzo, NumTypeParameters } from "../../../num"
import { RationalNum } from "../types"
import { computeLowestTermsRationalRatio } from "./lowestTerms"
import { computeRationalRatioFromRationalDecimal } from "./ratioFromRationalDecimal"
import { RationalRatio } from "./types"

const computeRationalRatioFromRationalNum = <T extends NumTypeParameters>(
    rationalNum: RationalNum<T>,
): RationalRatio<T> => {
    const { monzo, ratio, decimal } = rationalNum

    let rationalRatio: RationalRatio<T>
    if (!isUndefined(ratio)) {
        rationalRatio = ratio
    } else if (!isUndefined(monzo)) {
        rationalRatio = computeRatioFromMonzo(monzo)
    } else if (!isUndefined(decimal)) {
        rationalRatio = computeRationalRatioFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute ratio from rational num ${formatNum(rationalNum)} but it had no numeric members.`)
    }

    return computeLowestTermsRationalRatio(rationalRatio)
}

export {
    computeRationalRatioFromRationalNum,
}
