import {Exponent, isUndefined, Maybe, Prime, QuotientPartType} from "../../../../general"
import {Parameter} from "../../../types"

const secondaryParameterOverride = (
    parameter: Parameter,
    denominatorSpecificParameter: Maybe<Parameter>,
    primeExponent: Exponent<Prime>,
    quotientPart?: QuotientPartType,
): Parameter =>
    !isUndefined(denominatorSpecificParameter) &&
    quotientPart !== QuotientPartType.NUMERATOR &&
    (quotientPart === QuotientPartType.DENOMINATOR || primeExponent < 0) ?
        denominatorSpecificParameter :
        parameter

export {
    secondaryParameterOverride,
}
