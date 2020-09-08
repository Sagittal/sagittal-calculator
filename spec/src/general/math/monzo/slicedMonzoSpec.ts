import { computeMonzoSlicedToPrime, Monzo } from "../../../../../src/general/math/monzo"
import { Direction } from "../../../../../src/general/math/monzo/types"

describe("computeMonzoSlicedToPrime", () => {
    it("returns a monzo with the first n elements completely removed", () => {
        const monzo = [4, 0, 5, -3] as Monzo<{ direction: Direction.SUPER }>
        const prime = 5

        const actual: Monzo<{ direction: Direction.SUPER, slice: 5 }> = computeMonzoSlicedToPrime(monzo, prime)

        const expected: Monzo<{ direction: Direction.SUPER, slice: 5 }> =
            [5, -3] as Monzo<{ direction: Direction.SUPER, slice: 5 }>
        expect(actual).toEqual(expected)
    })

    it("another example, without a special parameterized type for the monzo", () => {
        const monzo = [4, 0, 5, -3] as Monzo
        const prime = 5

        const actual: Monzo<{ slice: 5 }> = computeMonzoSlicedToPrime(monzo, prime)

        const expected: Monzo<{ slice: 5 }> =
            [5, -3] as Monzo<{ slice: 5 }>
        expect(actual).toEqual(expected)
    })
})
