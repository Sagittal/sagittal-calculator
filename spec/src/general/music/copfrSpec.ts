import { computeCopfr, Copfr, Monzo } from "../../../../src/general/music"

describe("computeCopfr", () => {
    it("returns the resolution of prime factors (with repetition) in the monzo", () => {
        const monzo = [5, 4, -3, -2, 5] as Monzo

        const result = computeCopfr(monzo)

        expect(result).toBe(19 as Copfr)
    })
})
