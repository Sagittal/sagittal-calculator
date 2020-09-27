import { Ratio } from "../../../../../../../src/general/math/num/ratio"
import { computeLowestTermsRatio } from "../../../../../../../src/general/math/rational/num/ratio"

describe("computeLowestTermsRatio", (): void => {
    it("returns the ratio in lowest terms", (): void => {
        const ratio = [99, 21] as Ratio

        const actual = computeLowestTermsRatio(ratio)

        const expected: Ratio = [33, 7] as Ratio
        expect(actual).toEqual(expected)
    })
})