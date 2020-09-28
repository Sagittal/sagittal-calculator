import { isCloseTo } from "../../../code"
import { computeDecimalFromQuotient } from "../decimal"
import { Quotient } from "./types"

const equalIrrationalQuotients = (quotientA: Quotient, quotientB: Quotient): boolean => {
    return isCloseTo(computeDecimalFromQuotient(quotientA), computeDecimalFromQuotient(quotientB))
}

export {
    equalIrrationalQuotients,
}
