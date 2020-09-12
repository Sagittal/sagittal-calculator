import { computeIsSmoothMonzo, Smoothness, THREE_SMOOTHNESS } from "../../../../../src/general/math"
import { Monzo } from "../../../../../src/general/math/monzo"

describe("computeIsSmoothMonzo", () => {
    it("returns true if the monzo is smooth to the requested smoothness", () => {
        const monzo = [0, 0, 1] as Monzo

        const actual = computeIsSmoothMonzo(monzo, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })
    
    it("works even if the monzo hasn't been trimmed for some reason", () => {
        const monzo = [0, 0, 1, 0, 0, 0] as Monzo

        const actual = computeIsSmoothMonzo(monzo, 5 as 5 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is not smooth to the requested smoothness", () => {
        const monzo = [0, 0, 1] as Monzo

        const actual = computeIsSmoothMonzo(monzo, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})
