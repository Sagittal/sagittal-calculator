import { deepEquals, isCloseTo } from "../../../code"
import { computeDecimalFromRatio } from "../decimal"
import { computeLowestTermsRatio } from "./lowestTerms"
import { isRationalRatio } from "./typeGuards"
import { RatioNotDefaultingToRational } from "./types"

const equalRatios = (
    ratioA: RatioNotDefaultingToRational,
    ratioB: RatioNotDefaultingToRational,
): boolean => {
    if (isRationalRatio(ratioA) && isRationalRatio(ratioB)) {
        return deepEquals(computeLowestTermsRatio(ratioA), computeLowestTermsRatio(ratioB))
    }

    return isCloseTo(computeDecimalFromRatio(ratioA), computeDecimalFromRatio(ratioB))
}

export {
    equalRatios,
}
