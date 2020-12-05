import {Exponent, isUndefined, Maybe, Parameter, Prime, QuotientPartType} from "@sagittal/general"

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
