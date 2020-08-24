import { Monzo } from "../../../../src/general/music"
import { computeSuperunisonMonzo } from "../../../../src/general/music/superunisonMonzo"

describe("computeSuperunisonMonzo", () => {
    it("returns the monzo if it is already superunison", () => {
        const monzo = [0, 0, 0, 0, 2] as Monzo

        const actual = computeSuperunisonMonzo(monzo)

        expect(actual).toEqual(monzo)
    })

    it("returns the reciprocal of the monzo if it is not already superunison", () => {
        const monzo = [0, 0, 0, 1, -2] as Monzo

        const actual = computeSuperunisonMonzo(monzo)

        const expected = [0, 0, 0, -1, 2] as Monzo
        expect(actual).toEqual(expected)
    })
})
