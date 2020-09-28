import { Max, Prime } from "../../../../../src/general"
import { computeGpf, IntegerDecimal, RationalMonzo } from "../../../../../src/general/math"

describe("computeGpf", (): void => {
    it("returns the greatest prime factor (AKA prime limit) of the given monzo", (): void => {
        const rationalMonzo = [2, 3, 0, 0, 4] as RationalMonzo

        const actual = computeGpf(rationalMonzo)

        const expected = 11 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works when a monzo has trailing zeroes", (): void => {
        const rationalMonzo = [2, 3, 4, 0, 0] as RationalMonzo

        const actual = computeGpf(rationalMonzo)

        const expected = 5 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for an empty monzo (AKA the quotient 1/1), giving the conventional value of 1", (): void => {
        const rationalMonzo = [] as unknown[] as RationalMonzo

        const actual = computeGpf(rationalMonzo)

        const expected = 1 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for an integer decimal", (): void => {
        const integerDecimal = 35 as IntegerDecimal

        const actual = computeGpf(integerDecimal)

        const expected = 7 as Max<Prime>
        expect(actual).toBe(expected)
    })
})
