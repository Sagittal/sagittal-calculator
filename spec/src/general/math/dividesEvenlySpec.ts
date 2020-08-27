import { dividesEvenly } from "../../../../src/general/math"

describe("dividesEvenly", () => {
    it("returns the whole version of the type passed to it", () => {
        const numeral = 5
        const modulus = 2

        const actual = dividesEvenly(numeral, modulus)

        expect(actual).toBeFalsy()
    })
})
