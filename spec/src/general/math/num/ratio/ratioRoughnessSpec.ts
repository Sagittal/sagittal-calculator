import { FIVE_ROUGHNESS, Roughness } from "../../../../../../src/general/math"
import { computeIsRoughRatio, computeRoughRatio, Ratio } from "../../../../../../src/general/math/num/ratio"

describe("computeIsRoughRatio", (): void => {
    it("returns true if the ratio is to the requested roughness", (): void => {
        const ratio = [7, 5] as Ratio

        const actual = computeIsRoughRatio(ratio, FIVE_ROUGHNESS)

        expect(actual).toBeTruthy()
    })

    it("returns false if the ratio is not to the requested roughness", (): void => {
        const ratio = [7, 5] as Ratio

        const actual = computeIsRoughRatio(ratio, 11 as 11 & Roughness)

        expect(actual).toBeFalsy()
    })
})

describe("computeRoughRatio", (): void => {
    it("roughens the ratio to the desired roughness", (): void => {
        const ratio = [7, 5] as Ratio

        const actual = computeRoughRatio(ratio, 7 as 7 & Roughness)

        const expected = [7, 1] as Ratio<{ rough: 7 }>
        expect(actual).toEqual(expected)
    })
})
