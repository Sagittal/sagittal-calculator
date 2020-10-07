import { computeRoughRationalMonzo, EMPTY_MONZO, Monzo, Roughness } from "../../../../../../src/general/math"
import { isRoughRationalMonzo } from "../../../../../../src/general/math/rational/monzo"

describe("computeRoughRationalMonzo", (): void => {
    it("roughens the monzo to the requested roughness (setting initial elements of the monzo to 0)", (): void => {
        const rationalMonzo = [5, 6, 1, 0, 3] as Monzo<{ rational: true }>
        const roughness = 5 as 5 & Roughness

        const actual: Monzo<{ rational: true, rough: 5 }> = computeRoughRationalMonzo(rationalMonzo, roughness)

        const expected = [0, 0, 1, 0, 3] as Monzo<{ rational: true, rough: 5 }>
        expect(actual).toEqual(expected)
    })

    it("trims the monzo if necessary (after setting elements to 0, the monzo may be emptied)", (): void => {
        const rationalMonzo = [5, 6] as Monzo<{ rational: true }>
        const roughness = 5 as 5 & Roughness

        const actual: Monzo<{ rational: true, rough: 5 }> = computeRoughRationalMonzo(rationalMonzo, roughness)

        const expected = EMPTY_MONZO as Monzo<{ rational: true, rough: 5 }>
        expect(actual).toEqual(expected)
    })
})

describe("isRoughRationalMonzo", (): void => {
    it("returns true if the monzo is at the requested roughness", (): void => {
        const rationalMonzo = [0, 0, 0, 4, 3] as Monzo<{ rational: true }>

        const actual = isRoughRationalMonzo(rationalMonzo, 7 as 7 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is not at the requested roughness", (): void => {
        const rationalMonzo = [0, -5, 0, 4, 3] as Monzo<{ rational: true }>

        const actual = isRoughRationalMonzo(rationalMonzo, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})
