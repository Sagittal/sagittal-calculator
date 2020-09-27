import { deepEquals, isCloseTo } from "../../../code"
import { computeLowestTermsRatio, isRationalRatio } from "../../rational"
import { computeDecimalFromRatio } from "../decimal"
import { RatioNotDefaultingToRational } from "./types"

// TODO: perhaps I should invert this for monzos and ratios, i.e. call it equalRatios but it lives in math/rational/num
//  And if it can't check their equality as rationals, then it falls back to equalIrrational
//  ... which then makes me think... okay, we have 
//  { potentiallyIrrational: true }     -> potentially irrational, and apparently some reason to believe it is
//  {} =                                -> potentially irrational, but no reason to believe it is, so assume rational?
//  { potentiallyIrrational: false }    -> definitely rational
//  But we don't have a "definitely irrational"... hmmm
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
