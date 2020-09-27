import { FIVE_ROUGHNESS, RationalRatio, Roughness } from "../../../../../../../src/general/math"
import { computeRoughRationalRatio, isRoughRationalRatio } from "../../../../../../../src/general/math/rational/num/ratio"

describe("isRoughRationalRatio", (): void => {
    it("returns true if the ratio is to the requested roughness", (): void => {
        const rationalRatio = [7, 5] as RationalRatio

        const actual = isRoughRationalRatio(rationalRatio, FIVE_ROUGHNESS)

        expect(actual).toBeTruthy()
    })

    it("returns false if the ratio is not to the requested roughness", (): void => {
        const rationalRatio = [7, 5] as RationalRatio

        const actual = isRoughRationalRatio(rationalRatio, 11 as 11 & Roughness)

        expect(actual).toBeFalsy()
    })
})

describe("computeRoughRationalRatio", (): void => {
    it("roughens the ratio to the desired roughness", (): void => {
        const rationalRatio = [7, 5] as RationalRatio

        const actual = computeRoughRationalRatio(rationalRatio, 7 as 7 & Roughness)

        const expected = [7, 1] as RationalRatio<{ rough: 7 }>
        expect(actual).toEqual(expected)
    })
})
