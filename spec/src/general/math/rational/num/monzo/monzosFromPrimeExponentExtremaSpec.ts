import {
    computeRationalMonzosFromPrimeExponentExtremas,
    Exponent,
    Extrema,
    Integer,
    Prime,
} from "../../../../../../../src/general"

describe("computeRationalMonzosFromPrimeExponentExtremas", (): void => {
    it("returns the monzos that are possible given the corresponding prime exponent extremas", (): void => {
        const primeExponentExtremas = [
            [-1, 1],
            [-2, -1],
            [0, 0],
            [4, 6],
        ] as Array<Extrema<Integer & Exponent<Prime>>>

        const actual = computeRationalMonzosFromPrimeExponentExtremas(primeExponentExtremas)

        const expected = jasmine.arrayWithExactContents([
            [-1, -2, 0, 4],
            [-1, -2, 0, 5],
            [-1, -2, 0, 6],
            [-1, -1, 0, 4],
            [-1, -1, 0, 5],
            [-1, -1, 0, 6],
            [0, -2, 0, 4],
            [0, -2, 0, 5],
            [0, -2, 0, 6],
            [0, -1, 0, 4],
            [0, -1, 0, 5],
            [0, -1, 0, 6],
            [1, -2, 0, 4],
            [1, -2, 0, 5],
            [1, -2, 0, 6],
            [1, -1, 0, 4],
            [1, -1, 0, 5],
            [1, -1, 0, 6],
        ])
        expect(actual).toEqual(expected)
    })

    it("trims monzos as necessary", (): void => {
        const primeExponentExtremas = [
            [1, 1],
            [-1, 1],
        ] as Array<Extrema<Integer & Exponent<Prime>>>

        const actual = computeRationalMonzosFromPrimeExponentExtremas(primeExponentExtremas)

        const expected = jasmine.arrayWithExactContents([
            [1, -1],
            [1],
            [1, 1],
        ])
        expect(actual).toEqual(expected)
    })
})
