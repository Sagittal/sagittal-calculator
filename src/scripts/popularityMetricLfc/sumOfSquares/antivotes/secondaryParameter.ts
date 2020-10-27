import {Exponent, isUndefined, Maybe, Prime, QuotientPartType} from "../../../../general"
import {ParameterValue} from "../../../types"

const secondaryParameterOverride = (
    parameter: ParameterValue,
    denominatorSpecificParameter: Maybe<ParameterValue>,
    primeExponent: Exponent<Prime>,
    quotientPart?: QuotientPartType,
): ParameterValue =>
    !isUndefined(denominatorSpecificParameter) &&
    quotientPart !== QuotientPartType.NUMERATOR &&
    (quotientPart === QuotientPartType.DENOMINATOR || primeExponent < 0) ?
        denominatorSpecificParameter :
        parameter

export {
    secondaryParameterOverride,
}
