import { FractionalPart, isUndefined } from "../../../../general"
import { ParameterValue } from "../types"

const secondaryParameterOverridesForDenominator = (parameter: ParameterValue, denominatorSpecificParameter: ParameterValue | undefined, primeExponent: number, fractionalPart?: FractionalPart) =>
    !isUndefined(denominatorSpecificParameter) &&
    fractionalPart !== FractionalPart.NUMERATOR &&
    (fractionalPart === FractionalPart.DENOMINATOR || primeExponent < 0) ?
        denominatorSpecificParameter :
        parameter

export {
    secondaryParameterOverridesForDenominator,
}
