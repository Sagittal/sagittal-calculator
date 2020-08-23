import { Monzo } from "../../../../src/general/music"
import { computeSuperunisonMonzo } from "../../../../src/general/music/superunisonMonzo"

describe("computeSuperunisonMonzo", () => {
    it("returns the monzo if it is already superunison", () => {
        const monzo = [0, 0, 0, 0, 2] as Monzo

        const result = computeSuperunisonMonzo(monzo)

        expect(result).toEqual(monzo)
    })

    it("returns the reciprocal of the monzo if it is not already superunison", () => {
        const monzo = [0, 0, 0, 1, -2] as Monzo

        const result = computeSuperunisonMonzo(monzo)

        expect(result).toEqual([0, 0, 0, -1, 2] as Monzo)
    })
})
