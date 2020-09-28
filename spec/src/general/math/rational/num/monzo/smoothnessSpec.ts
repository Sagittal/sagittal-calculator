import { isSmoothRationalMonzo, RationalMonzo, Smoothness, THREE_SMOOTHNESS } from "../../../../../../../src/general/math"
import { computeRationalMonzoSmoothness } from "../../../../../../../src/general/math/rational/num/monzo"

describe("isSmoothRationalMonzo", (): void => {
    it("returns true if the monzo is smooth to the requested smoothness", (): void => {
        const rationalMonzo = [0, 0, 1] as RationalMonzo

        const actual = isSmoothRationalMonzo(rationalMonzo, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("works even if the monzo hasn't been trimmed for some reason", (): void => {
        const rationalMonzo = [0, 0, 1, 0, 0, 0] as RationalMonzo

        const actual = isSmoothRationalMonzo(rationalMonzo, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is not smooth to the requested smoothness", (): void => {
        const rationalMonzo = [0, 0, 1] as RationalMonzo

        const actual = isSmoothRationalMonzo(rationalMonzo, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})

describe("computeRationalMonzoSmoothness", (): void => {
    it("works", (): void => {
        const rationalMonzo = [ 1, 0, -1, 0, 1 ] as RationalMonzo
        
        const actual = computeRationalMonzoSmoothness(rationalMonzo)
        
        const expected = 11 as Smoothness
        expect(actual).toBe(expected)
    })
})
