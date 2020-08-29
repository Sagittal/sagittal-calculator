import { Exponent, FractionalPartType, Prime } from "../../../../../../src/general/math"
import { ParameterValue } from "../../../../../../src/scripts/lfc/sumOfSquares"
import { secondaryParameterOverride } from "../../../../../../src/scripts/lfc/sumOfSquares/antivotes/secondaryParameter"

describe("secondaryParameterOverride", () => {
    const denominatorSpecificParameter = 5 as ParameterValue
    const parameter = 3 as ParameterValue

    it(
        `returns the parameter when the prime exponent is positive (it is in the numerator)`,
        () => {
            const primeExponent = 2 as Exponent<Prime>

            const actual =
                secondaryParameterOverride(parameter, denominatorSpecificParameter, primeExponent)

            expect(actual).toBe(parameter)
        },
    )

    it(
        `returns the denominator-specific parameter when the prime exponent is negative (it is in the denominator)`,
        () => {
            const primeExponent = -2 as Exponent<Prime>

            const actual =
                secondaryParameterOverride(parameter, denominatorSpecificParameter, primeExponent)

            expect(actual).toBe(denominatorSpecificParameter)
        },
    )

    it(
        `returns the parameter when the fractional part is stated to be the numerator, 
        even if the prime exponent is negative 
        (which should never happen, but just in case, I think the fractional part is a stronger message)`,
        () => {
            const primeExponent = -2 as Exponent<Prime>
            const fractionalPart = FractionalPartType.NUMERATOR

            const actual =
                secondaryParameterOverride(parameter, denominatorSpecificParameter, primeExponent, fractionalPart)

            expect(actual).toBe(parameter)
        },
    )

    it(
        `returns the denominator-specific parameter when the fractional part is stated to be the denominator, 
        even if the prime exponent is positive (which would happen in real life, 
        when a separate monzo for the denominator is calculated from an integer which was in a denominator)`,
        () => {
            const primeExponent = 2 as Exponent<Prime>
            const fractionalPart = FractionalPartType.DENOMINATOR

            const actual =
                secondaryParameterOverride(parameter, denominatorSpecificParameter, primeExponent, fractionalPart)

            expect(actual).toBe(denominatorSpecificParameter)
        },
    )

    it(
        `returns the parameter when the denominator-specific parameter is not provided, 
        even if the prime exponent is negative and the requested fractional part is denominator`,
        () => {
            const primeExponent = -2 as Exponent<Prime>
            const fractionalPart = FractionalPartType.DENOMINATOR

            const actual =
                secondaryParameterOverride(parameter, undefined, primeExponent, fractionalPart)

            expect(actual).toBe(parameter)
        },
    )
})
