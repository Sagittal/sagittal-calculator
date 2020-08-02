import { ParameterValue } from "../types"
import { FractionalPart, isUndefined } from "../../../../general"

const secondaryParameterOverridesForDenominator = (parameter: ParameterValue, denominatorSpecificParameter: ParameterValue | undefined, primeExponent: number, fractionalPart?: FractionalPart) =>
    fractionalPart !== FractionalPart.NUMERATOR &&
    !isUndefined(denominatorSpecificParameter) &&
    (fractionalPart === FractionalPart.DENOMINATOR || primeExponent < 0) ?
        denominatorSpecificParameter :
        parameter

export {
    secondaryParameterOverridesForDenominator,
}
