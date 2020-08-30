import { computeIsSubMonzo, Monzo } from "../../../../../src/general/math"

describe("computeIsSubMonzo", () => {
    it("returns false if the monzo is super", () => {
        const monzo = [-1, 1] as Monzo      // 3/2 = 1.5 > 1

        const actual = computeIsSubMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo is sub", () => {
        const monzo = [1, -1] as Monzo      // 2/3 = 0.667 < 1

        const actual = computeIsSubMonzo(monzo)

        expect(actual).toBeTruthy()
    })
})
