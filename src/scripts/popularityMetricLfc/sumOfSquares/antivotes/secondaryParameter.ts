import { Exponent, FractionalPartType, isUndefined, Maybe, Prime } from "../../../../general"
import { ParameterValue } from "../types"

const secondaryParameterOverride = (
    parameter: ParameterValue,
    denominatorSpecificParameter: Maybe<ParameterValue>,
    primeExponent: Exponent<Prime>,
    fractionalPart?: FractionalPartType,
) =>
    !isUndefined(denominatorSpecificParameter) &&
    fractionalPart !== FractionalPartType.NUMERATOR &&
    (fractionalPart === FractionalPartType.DENOMINATOR || primeExponent < 0) ?
        denominatorSpecificParameter :
        parameter

export {
    secondaryParameterOverride,
}
