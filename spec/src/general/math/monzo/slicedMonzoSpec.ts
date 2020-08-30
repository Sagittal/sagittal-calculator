import { computeMonzoSlicedToPrimeIndex, Monzo } from "../../../../../src/general/math/monzo"

describe("computeMonzoSlicedToPrimeIndex", () => {
    it("returns a monzo with the first n elements completely removed", () => {
        const monzo = [4, 0, 5, -3] as Monzo
        const prime = 5

        const actual: Monzo<number, 5> = computeMonzoSlicedToPrimeIndex(monzo, prime)

        const expected: Monzo<number, 5> = [5, -3] as Monzo<number, 5>
        expect(actual).toEqual(expected)
    })
})
