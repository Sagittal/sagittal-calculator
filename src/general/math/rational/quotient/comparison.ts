import { deepEquals } from "../../../code"
import { Quotient } from "../../numeric"
import { computeLowestTermsRationalQuotient } from "./lowestTerms"

const equalRationalQuotients = (
    rationalQuotientA: Quotient<{ rational: true }>,
    rationalQuotientB: Quotient<{ rational: true }>,
): boolean =>
    deepEquals(
        computeLowestTermsRationalQuotient(rationalQuotientA),
        computeLowestTermsRationalQuotient(rationalQuotientB),
    )

export {
    equalRationalQuotients,
}
