import { isCloseTo, MAX_JS_PRECISION, Precision } from "../../../code"
import { equalRationalQuotients, isRationalQuotient } from "../../rational"
import { computeDecimalFromQuotient } from "../decimal"
import { Quotient } from "./types"

const equalQuotients = (quotientA: Quotient, quotientB: Quotient, precision: Precision = MAX_JS_PRECISION): boolean =>
    isRationalQuotient(quotientA) && isRationalQuotient(quotientB) ?
        equalRationalQuotients(quotientA, quotientB) :
        isCloseTo(
            quotientA && computeDecimalFromQuotient(quotientA),
            quotientB && computeDecimalFromQuotient(quotientB),
            precision,
        )


export {
    equalQuotients,
}
