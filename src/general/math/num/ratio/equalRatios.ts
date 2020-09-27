import { deepEquals, isCloseTo } from "../../../code"
import { computeDecimalFromRatio } from "../decimal"
import { computeLowestTermsRatio } from "./lowestTerms"
import { computeRatioIsRational } from "./typeGuards"
import { RatioNotDefaultingToRational } from "./types"

const equalRatios = (
    ratioA: RatioNotDefaultingToRational,
    ratioB: RatioNotDefaultingToRational,
): boolean => {
    if (computeRatioIsRational(ratioA) && computeRatioIsRational(ratioB)) {
        return deepEquals(computeLowestTermsRatio(ratioA), computeLowestTermsRatio(ratioB))
    }

    return isCloseTo(computeDecimalFromRatio(ratioA), computeDecimalFromRatio(ratioB))
}

export {
    equalRatios,
}