import { Ratio } from "../../../../../../src/general/math/rational/ratio"
import { computeRatioIsInteger, computeRatioIsRational } from "../../../../../../src/general/math/rational/ratio/typeGuards"

describe("computeRatioIsInteger", (): void => {
    it("returns true if the denominator divides evenly into the numerator", (): void => {
        const ratio = [77, 11] as Ratio

        const actual = computeRatioIsInteger(ratio)

        expect(actual).toBeTruthy()
    })

    it("returns false if the denominator does not divide evenly into the numerator", (): void => {
        const ratio = [77, 10] as Ratio

        const actual = computeRatioIsInteger(ratio)

        expect(actual).toBeFalsy()
    })
})

describe("computeRatioIsRational", (): void => {
    it("returns true if the ratio is rational", (): void => {
        const ratio = [11, 6] as Ratio

        const actual = computeRatioIsRational(ratio)

        expect(actual).toBeTruthy()
    })

    it("returns false if the ratio is irrational", (): void => {
        const ratio = [11.3, 6.1] as Ratio

        const actual = computeRatioIsRational(ratio)

        expect(actual).toBeFalsy()
    })
})
