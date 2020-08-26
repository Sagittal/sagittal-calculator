import { Exponent, FractionalPartType, isUndefined, Prime } from "../../../../general"
import { ParameterValue } from "../types"

const secondaryParameterOverridesForDenominator = (parameter: ParameterValue, denominatorSpecificParameter: ParameterValue | undefined, primeExponent: Exponent<Prime>, fractionalPart?: FractionalPartType) =>
    !isUndefined(denominatorSpecificParameter) &&
    fractionalPart !== FractionalPartType.NUMERATOR &&
    (fractionalPart === FractionalPartType.DENOMINATOR || primeExponent < 0) ?
        denominatorSpecificParameter :
        parameter

export {
    secondaryParameterOverridesForDenominator,
}
