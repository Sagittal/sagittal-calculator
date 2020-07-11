import { computeTrimmedMonzo } from "../../../../src/utilities/comma/trimmedMonzo"
import { Monzo } from "../../../../src/utilities/comma/types"

describe("computeTrimmedMonzo", () => {
    it("removes trailing zeroes from the monzo", () => {
        const monzo = [4, -5, 0, 0, 0] as Monzo

        const result = computeTrimmedMonzo(monzo)

        expect(result).toEqual([4, -5] as Monzo)
    })

    it("does not mutate the original monzo", () => {
        const monzo = [4, -5, 0, 0, 0] as Monzo

        computeTrimmedMonzo(monzo)

        expect(monzo).toEqual([4, -5, 0, 0, 0] as Monzo)
    })
})
