import { Ratio } from "../../../../../../src/general/math/rational/ratio"
import { computeRatioIsInteger } from "../../../../../../src/general/math/rational/ratio/ratioIsInteger"

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
