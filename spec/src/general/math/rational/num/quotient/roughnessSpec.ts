import { FIVE_ROUGHNESS, RationalQuotient, Roughness } from "../../../../../../../src/general/math"
import { computeRoughRationalQuotient, isRoughRationalQuotient } from "../../../../../../../src/general/math/rational/num/quotient"

describe("isRoughRationalQuotient", (): void => {
    it("returns true if the quotient is to the requested roughness", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = isRoughRationalQuotient(rationalQuotient, FIVE_ROUGHNESS)

        expect(actual).toBeTruthy()
    })

    it("returns false if the quotient is not to the requested roughness", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = isRoughRationalQuotient(rationalQuotient, 11 as 11 & Roughness)

        expect(actual).toBeFalsy()
    })
})

describe("computeRoughRationalQuotient", (): void => {
    it("roughens the quotient to the desired roughness", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = computeRoughRationalQuotient(rationalQuotient, 7 as 7 & Roughness)

        const expected = [7, 1] as RationalQuotient<{ rough: 7 }>
        expect(actual).toEqual(expected)
    })
})
