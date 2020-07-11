import { computeCopfr } from "../../../../src/utilities/comma/copfr"
import { Monzo } from "../../../../src/utilities/comma/types"

describe("computeCopfr", () => {
    it("returns the count of prime factors (with repetition) in the monzo", () => {
        const monzo = [5, 4, -3, -2, 5] as Monzo

        const result = computeCopfr(monzo)

        expect(result).toBe(19)
    })
})
