import { deepEquals } from "../../../../code"
import { equalRealQuotients, RealQuotient } from "../../../real"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { isRationalQuotient } from "./typeGuards"

const equalQuotients = (quotientA: RealQuotient, quotientB: RealQuotient): boolean => {
    if (isRationalQuotient(quotientA) && isRationalQuotient(quotientB)) {
        return deepEquals(computeLowestTermsRationalQuotient(quotientA), computeLowestTermsRationalQuotient(quotientB))
    }

    return equalRealQuotients(quotientA, quotientB)
}

export {
    equalQuotients,
}
