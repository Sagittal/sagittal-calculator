import { deepEquals, isCloseTo } from "../../../code"
import { computeLowestTermsRationalRatio, isRationalRatio } from "../../rational"
import { computeDecimalFromRatio } from "../decimal"
import { Ratio } from "./types"

// TODO: perhaps I should invert this for monzos and ratios, i.e. call it equalRatios but it lives in math/rational/num
//  And if it can't check their equality as rationals, then it falls back to equalIrrational
const equalRatios = (ratioA: Ratio, ratioB: Ratio): boolean => {
    if (isRationalRatio(ratioA) && isRationalRatio(ratioB)) {
        return deepEquals(computeLowestTermsRationalRatio(ratioA), computeLowestTermsRationalRatio(ratioB))
    }

    return isCloseTo(computeDecimalFromRatio(ratioA), computeDecimalFromRatio(ratioB))
}

export {
    equalRatios,
}
