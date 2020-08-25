import { computeSuperMonzo, Monzo } from "../../../../src/general/math"

describe("computeSuperMonzo", () => {
    it("returns the monzo if it is already super", () => {
        const monzo = [0, 0, 0, 0, 2] as Monzo

        const actual = computeSuperMonzo(monzo)

        expect(actual).toEqual(monzo)
    })

    it("returns the reciprocal of the monzo if it is not already super", () => {
        const monzo = [0, 0, 0, 1, -2] as Monzo     // 7/121 = 0.0579 < 1

        const actual = computeSuperMonzo(monzo)

        const expected = [0, 0, 0, -1, 2] as Monzo  // 121/7 = 17.286 > 1
        expect(actual).toEqual(expected)
    })
})
