import { deepEquals, isCloseTo } from "../../../code"
import { computeLowestTermsRatio } from "./lowestTerms"
import { computeNumberFromRatio } from "./numberFromRatio"
import { computeRatioIsRational } from "./ratioIsRational"
import { PotentiallyIrrationalRatioParameter } from "./types"

const equalRatios = (
    ratioA: PotentiallyIrrationalRatioParameter,
    ratioB: PotentiallyIrrationalRatioParameter,
): boolean => {
    if (computeRatioIsRational(ratioA) && computeRatioIsRational(ratioB)) {
        return deepEquals(computeLowestTermsRatio(ratioA), computeLowestTermsRatio(ratioB))
    }

    return isCloseTo(computeNumberFromRatio(ratioA), computeNumberFromRatio(ratioB))
}

export {
    equalRatios,
}
