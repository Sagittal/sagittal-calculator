import { isCloseTo } from "../../../code"
import { computeRealDecimalFromRealQuotient } from "../decimal"
import { RealQuotient } from "./types"

const equalRealQuotients = (quotientA: RealQuotient, quotientB: RealQuotient): boolean => {
    return isCloseTo(computeRealDecimalFromRealQuotient(quotientA), computeRealDecimalFromRealQuotient(quotientB))
}

export {
    equalRealQuotients,
}
