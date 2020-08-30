import { invertMonzo, Monzo } from "../../../../../src/general/math"

describe("invertMonzo", () => {
    it("returns the inverted (negated) version of the monzo", () => {
        const monzo = [4, 0, -1, 1] as Monzo

        const actual = invertMonzo(monzo)

        const expected = [-4, 0, 1, -1] as Monzo
        expect(actual).toEqual(expected)
    })
})
