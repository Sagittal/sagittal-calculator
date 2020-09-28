import { computeRoughRationalMonzo, RationalMonzo, Roughness } from "../../../../../../../src/general/math"
import { isRoughRationalMonzo } from "../../../../../../../src/general/math/rational/num/monzo"

describe("computeRoughRationalMonzo", (): void => {
    it("roughens the monzo to the requested roughness", (): void => {
        const rationalMonzo = [5, 6, 1, 0, 3] as RationalMonzo
        const roughness = 5 as 5 & Roughness

        const actual = computeRoughRationalMonzo(rationalMonzo, roughness)

        const expected = [0, 0, 1, 0, 3] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("trims the monzo if necessary", (): void => {
        const rationalMonzo = [5, 6] as RationalMonzo
        const roughness = 5 as 5 & Roughness

        const actual = computeRoughRationalMonzo(rationalMonzo, roughness)

        const expected = [] as unknown[] as RationalMonzo
        expect(actual).toEqual(expected)
    })
})

describe("isRoughRationalMonzo", (): void => {
    it("returns true if the monzo is at the requested roughness", (): void => {
        const rationalMonzo = [0, 0, 0, 4, 3] as RationalMonzo

        const actual = isRoughRationalMonzo(rationalMonzo, 7 as 7 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is not at the requested roughness", (): void => {
        const rationalMonzo = [0, -5, 0, 4, 3] as RationalMonzo

        const actual = isRoughRationalMonzo(rationalMonzo, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})
