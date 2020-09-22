import { Ratio } from "../../../../../../src/general/math/rational/ratio"
import { computeRatioIsRational } from "../../../../../../src/general/math/rational/ratio/ratioIsRational"

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
