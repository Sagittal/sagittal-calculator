import {Exponent, Parameter, Prime, QuotientPartType} from "../../../../../../src/general"
import {secondaryParameterOverride} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares/antivotes/secondaryParameter"

describe("secondaryParameterOverride", (): void => {
    const denominatorSpecificParameter = 5 as Parameter
    const parameter = 3 as Parameter

    it("returns the parameter when the prime exponent is positive (it is in the numerator)", (): void => {
        const primeExponent = 2 as Exponent<Prime>

        const actual =
            secondaryParameterOverride(parameter, denominatorSpecificParameter, primeExponent)

        expect(actual).toBe(parameter)
    })

    it("returns the denominator-specific parameter when the prime exponent is negative (it is in the denominator)          ", (): void => {
        const primeExponent = -2 as Exponent<Prime>

        const actual =
            secondaryParameterOverride(parameter, denominatorSpecificParameter, primeExponent)

        expect(actual).toBe(denominatorSpecificParameter)
    })

    it("returns the parameter when the fractional part is stated to be the numerator, even if the prime exponent is negative (which should never happen, but just in case, I think the fractional part is a stronger message)", (): void => {
        const primeExponent = -2 as Exponent<Prime>
        const quotientPart = QuotientPartType.NUMERATOR

        const actual =
            secondaryParameterOverride(parameter, denominatorSpecificParameter, primeExponent, quotientPart)

        expect(actual).toBe(parameter)
    })

    it("returns the denominator-specific parameter when the fractional part is stated to be the denominator, even if the prime exponent is positive (which could happen, when a separate monzo for the denominator is calculated from an integer which was in a denominator)", (): void => {
        const primeExponent = 2 as Exponent<Prime>
        const quotientPart = QuotientPartType.DENOMINATOR

        const actual =
            secondaryParameterOverride(parameter, denominatorSpecificParameter, primeExponent, quotientPart)

        expect(actual).toBe(denominatorSpecificParameter)
    })

    it("returns the parameter when the denominator-specific parameter is not provided, even if the prime exponent is negative and the requested fractional part is denominator", (): void => {
        const primeExponent = -2 as Exponent<Prime>
        const quotientPart = QuotientPartType.DENOMINATOR

        const actual =
            secondaryParameterOverride(parameter, undefined, primeExponent, quotientPart)

        expect(actual).toBe(parameter)
    })
})
