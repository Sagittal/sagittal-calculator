import { computeTrimmedMonzo, Monzo } from "../../../../src/general/music"

describe("computeTrimmedMonzo", () => {
    const monzo = [4, -5, 0, 0, 0] as Monzo

    it("removes trailing zeroes from the monzo", () => {
        const actual = computeTrimmedMonzo(monzo)

        const expected = [4, -5] as Monzo
        expect(actual).toEqual(expected)
    })

    it("does not mutate the original monzo", () => {
        computeTrimmedMonzo(monzo)

        const expected = [4, -5, 0, 0, 0] as Monzo
        expect(monzo).toEqual(expected)
    })
})
