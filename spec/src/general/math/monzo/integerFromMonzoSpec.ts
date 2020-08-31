import { computeIntegerFromMonzo, Integer, Monzo } from "../../../../../src/general/math"

describe("computeIntegerFromMonzo", () => {
    it("returns an integer if the monzo has all positive exponents", () => {
        const monzo = [1, 4, 2, 3] as Monzo

        const actual = computeIntegerFromMonzo(monzo)

        const expected: Integer = 1389150 as Integer
        expect(actual).toBe(expected)
    })
})