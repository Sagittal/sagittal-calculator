import { computePrimeCount } from "../../../src/utilities/primeCount"

describe("computePrimeCount", () => {
    it("is the π function, returning the resolution of primes less than or equal to a number", () => {
        expect(computePrimeCount(1)).toBe(0)
        expect(computePrimeCount(2)).toBe(1)
        expect(computePrimeCount(3)).toBe(2)
        expect(computePrimeCount(4)).toBe(2)
        expect(computePrimeCount(5)).toBe(3)
        expect(computePrimeCount(6)).toBe(3)
        expect(computePrimeCount(7)).toBe(4)
        expect(computePrimeCount(8)).toBe(4)
        expect(computePrimeCount(9)).toBe(4)
        expect(computePrimeCount(10)).toBe(4)
        expect(computePrimeCount(11)).toBe(5)
        expect(computePrimeCount(60)).toBe(17)
    })
})
