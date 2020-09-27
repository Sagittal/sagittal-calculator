import {
    computeLowestTermsRationalRatio,
    RationalRatio,
} from "../../../../../../../src/general/math/rational/num/ratio"

describe("computeLowestTermsRationalRatio", (): void => {
    it("returns the ratio in lowest terms", (): void => {
        const ratio = [99, 21] as RationalRatio

        const actual = computeLowestTermsRationalRatio(ratio)

        const expected: RationalRatio = [33, 7] as RationalRatio
        expect(actual).toEqual(expected)
    })
})
