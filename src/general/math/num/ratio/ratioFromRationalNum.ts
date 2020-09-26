import { isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { RationalNum, RationalNumTypeParameters } from "../../rational"
import { computeLowestTermsRatio } from "./lowestTerms"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeRatioFromRationalDecimal } from "./ratioFromRationalDecimal"
import { Ratio } from "./types"

const computeRatioFromRationalNum = <T extends RationalNumTypeParameters>(
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
        throw new Error(`Tried to compute ratio from rational num ${formatNum(rationalNum, { align: false })} but it had no numeric members.`)
    }

    return computeLowestTermsRatio(outputRatio)
}

export {
    computeRatioFromRationalNum,
}
