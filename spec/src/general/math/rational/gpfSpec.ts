import { Max, Prime } from "../../../../../src/general"
import { computeGpf, Integer, RationalMonzo } from "../../../../../src/general/math"

describe("computeGpf", (): void => {
    it("returns the greatest prime factor (AKA prime limit) of the given monzo", (): void => {
        const monzo = [2, 3, 0, 0, 4] as RationalMonzo

        const actual = computeGpf(monzo)

        const expected = 11 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works when a monzo has trailing zeroes", (): void => {
        const monzo = [2, 3, 4, 0, 0] as RationalMonzo

        const actual = computeGpf(monzo)

        const expected = 5 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for an empty monzo (AKA the quotient 1/1), giving the conventional value of 1", (): void => {
        const monzo = [] as RationalMonzo

        const actual = computeGpf(monzo)

        const expected = 1 as Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for an integer", (): void => {
        const integer = 35 as Integer

        const actual = computeGpf(integer)

        const expected = 7 as Max<Prime>
        expect(actual).toBe(expected)
    })
})
