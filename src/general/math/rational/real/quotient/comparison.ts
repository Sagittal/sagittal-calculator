import { deepEquals } from "../../../../code"
import { equalIrrationalQuotients, Quotient } from "../../../real"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"
import { isRationalQuotient } from "./typeGuards"

const equalQuotients = (quotientA: Quotient, quotientB: Quotient): boolean => {
    if (isRationalQuotient(quotientA) && isRationalQuotient(quotientB)) {
        return deepEquals(computeLowestTermsRationalQuotient(quotientA), computeLowestTermsRationalQuotient(quotientB))
    }

    return equalIrrationalQuotients(quotientA, quotientB)
}

export {
    equalQuotients,
}
