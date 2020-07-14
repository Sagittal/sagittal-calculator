import { computeSopf, Monzo } from "../../../../src/general/music"

describe("computeSopf", () => {
    it("sums the absolute values of the unique prime factors in the monzo", () => {
        const monzo = [5, 6, 0, 0, 1, -1, 2] as Monzo

        const result = computeSopf(monzo)

        expect(result).toBe(2 + 3 + 11 + 13 + 17)
    })

    it("works for an empty monzo", () => {
        const monzo = [] as Monzo

        const result = computeSopf(monzo)

        expect(result).toBe(0)
    })

    it("works for a simple integer", () => {
        const integer = 3751

        const result = computeSopf(integer)

        expect(result).toBe(42)
    })
})
