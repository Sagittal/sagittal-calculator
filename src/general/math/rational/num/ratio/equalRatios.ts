import { deepEquals } from "../../../../code"
import { equalIrrationalRatios, Ratio } from "../../../num"
import { computeLowestTermsRationalRatio } from "./lowestTerms"
import { isRationalRatio } from "./typeGuards"

const equalRatios = (ratioA: Ratio, ratioB: Ratio): boolean => {
    if (isRationalRatio(ratioA) && isRationalRatio(ratioB)) {
        return deepEquals(computeLowestTermsRationalRatio(ratioA), computeLowestTermsRationalRatio(ratioB))
    }

    return equalIrrationalRatios(ratioA, ratioB)
}

export {
    equalRatios,
}
