import {Copfr, Max, Monzo, Prime, Sopfr} from "../../../../../src/general"
import {N2D3P9} from "../../../../../src/sagittal/ji/metrics"
import {compute23FreeRationalMonzosToCheck} from "../../../../../src/scripts/jiPitch/findCommas/two3FreeMonzosToCheck"

describe("compute23FreeRationalMonzosToCheck", (): void => {
    it("returns the list of 2,3-free monzos to check, given all four of the maxes", (): void => {
        const maxPrimeLimit = 7 as Max<Max<Prime>>
        const max23FreeSopfr = 15 as Max<Sopfr<{rough: 5}>>
        const max23FreeCopfr = 2 as Max<Copfr<{rough: 5}>>
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = compute23FreeRationalMonzosToCheck({
            maxPrimeLimit,
            max23FreeSopfr,
            max23FreeCopfr,
            maxN2D3P9,
        })

        const expected = [
            [0, 0, -2],
            [0, 0, -1, -1],
            [0, 0, -1],
            [0, 0, -1, 1],
            [0, 0, 0, -1],
            [],
            [0, 0, 0, 1],
            [0, 0, 1, -1],
            [0, 0, 1],
            [0, 0, 1, 1],
            [0, 0, 2],
        ] as Array<Monzo<{rational: true, rough: 5}>>
        expect(actual).toBeArrayWithDeepEqualContents(expected)
    })

    describe("3 of 4", (): void => {
        it("returns the list of 2,3-free monzos to check, given a max prime limit, a max 2,3-free SoPFR, and a max 2,3-free CoPFR", (): void => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const max23FreeSopfr = 15 as Max<Sopfr<{rough: 5}>>
            const max23FreeCopfr = 2 as Max<Copfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({
                maxPrimeLimit,
                max23FreeSopfr,
                max23FreeCopfr,
            })

            const expected = [
                [0, 0, -2],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -2],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 0, 2],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max prime limit, a max N2D3P9, and a max 2,3-free CoPFR", (): void => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxN2D3P9 = 5 as Max<N2D3P9>
            const max23FreeCopfr = 2 as Max<Copfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({
                maxPrimeLimit,
                maxN2D3P9,
                max23FreeCopfr,
            })

            const expected = [
                [0, 0, -2],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max 2,3-free SoPFR, a max N2D3P9, and a max 2,3-free CoPFR", (): void => {
            const max23FreeSopfr = 15 as Max<Sopfr<{rough: 5}>>
            const maxN2D3P9 = 5 as Max<N2D3P9>
            const max23FreeCopfr = 2 as Max<Copfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({
                max23FreeSopfr,
                maxN2D3P9,
                max23FreeCopfr,
            })

            const expected = [
                [0, 0, -2],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max prime limit, a max N2D3P9, and a max 2,3-free SoPFR", (): void => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const max23FreeSopfr = 15 as Max<Sopfr<{rough: 5}>>
            const maxN2D3P9 = 5 as Max<N2D3P9>

            const actual = compute23FreeRationalMonzosToCheck({
                maxPrimeLimit,
                max23FreeSopfr,
                maxN2D3P9,
            })

            const expected = [
                [0, 0, -2],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })
    })

    describe("2 of 4", (): void => {
        it("returns the list of 2,3-free monzos to check, given a max prime limit and a max 2,3-free SoPFR               ", (): void => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const max23FreeSopfr = 15 as Max<Sopfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({maxPrimeLimit, max23FreeSopfr})

            const expected = [
                [0, 0, -3],
                [0, 0, -2],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -2],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 0, 2],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2],
                [0, 0, 3],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max prime limit and a max N2D3P9", (): void => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxN2D3P9 = 7 as Max<N2D3P9>

            const actual = compute23FreeRationalMonzosToCheck({maxPrimeLimit, maxN2D3P9})

            const expected = [
                [0, 0, -2, -1],
                [0, 0, -2],
                [0, 0, -2, 1],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2, -1],
                [0, 0, 2],
                [0, 0, 2, 1],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max prime limit and a max 2,3-free CoPFR               ", (): void => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const max23FreeCopfr = 3 as Max<Copfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({maxPrimeLimit, max23FreeCopfr})

            const expected = [
                [0, 0, -3],
                [0, 0, -2, -1],
                [0, 0, -2],
                [0, 0, -2, 1],
                [0, 0, -1, -2],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, -1, 2],
                [0, 0, 0, -3],
                [0, 0, 0, -2],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 0, 2],
                [0, 0, 0, 3],
                [0, 0, 1, -2],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 1, 2],
                [0, 0, 2, -1],
                [0, 0, 2],
                [0, 0, 2, 1],
                [0, 0, 3],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max 2,3-free SoPFR and a max 2,3-free CoPFR                   ", (): void => {
            const max23FreeSopfr = 20 as Max<Sopfr<{rough: 5}>>
            const max23FreeCopfr = 3 as Max<Copfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({max23FreeSopfr, max23FreeCopfr})

            const expected = [
                [0, 0, -3],
                [0, 0, -2, -1],
                [0, 0, -2],
                [0, 0, -2, 1],
                [0, 0, -1, -2],
                [0, 0, -1, -1],
                [0, 0, -1, 0, -1],
                [0, 0, -1, 0, 0, -1],
                [0, 0, -1],
                [0, 0, -1, 0, 0, 1],
                [0, 0, -1, 0, 1],
                [0, 0, -1, 1],
                [0, 0, -1, 2],
                [0, 0, 0, -2],
                [0, 0, 0, -1, -1],
                [0, 0, 0, -1, 0, -1],
                [0, 0, 0, -1],
                [0, 0, 0, -1, 0, 1],
                [0, 0, 0, -1, 1],
                [0, 0, 0, 0, -1],
                [0, 0, 0, 0, 0, -1],
                [0, 0, 0, 0, 0, 0, -1],
                [0, 0, 0, 0, 0, 0, 0, -1],
                [],
                [0, 0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1, -1],
                [0, 0, 0, 1, 0, -1],
                [0, 0, 0, 1],
                [0, 0, 0, 1, 0, 1],
                [0, 0, 0, 1, 1],
                [0, 0, 0, 2],
                [0, 0, 1, -2],
                [0, 0, 1, -1],
                [0, 0, 1, 0, -1],
                [0, 0, 1, 0, 0, -1],
                [0, 0, 1],
                [0, 0, 1, 0, 0, 1],
                [0, 0, 1, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 1, 2],
                [0, 0, 2, -1],
                [0, 0, 2],
                [0, 0, 2, 1],
                [0, 0, 3],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max N2D3P9 and a max 2,3-free CoPFR", (): void => {
            const maxN2D3P9 = 9 as Max<N2D3P9>
            const max23FreeCopfr = 2 as Max<Copfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({maxN2D3P9, max23FreeCopfr})

            const expected = [
                [0, 0, -2],
                [0, 0, -1, -1],
                [0, 0, -1, 0, -1],
                [0, 0, -1],
                [0, 0, -1, 0, 1],
                [0, 0, -1, 1],
                [0, 0, 0, -1, -1],
                [0, 0, 0, -1],
                [0, 0, 0, -1, 1],
                [0, 0, 0, 0, -1],
                [],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1, -1],
                [0, 0, 0, 1],
                // N2D3P9(77) = 23.5, but that's okay; it'll get filtered later. this is just possibilities
                [0, 0, 0, 1, 1],
                [0, 0, 1, -1],
                [0, 0, 1, 0, -1],
                [0, 0, 1],
                [0, 0, 1, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max N2D3P9 and a max 2,3-free SoPFR", (): void => {
            const maxN2D3P9 = 6 as Max<N2D3P9>
            const max23FreeSopfr = 12 as Max<Sopfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({maxN2D3P9, max23FreeSopfr})

            const expected = [
                [0, 0, -2],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })
    })

    describe("1 of 4 possibilities", (): void => {
        it("returns the list of 2,3-free monzos to check, given only a max 2,3-free SoPFR", (): void => {
            const max23FreeSopfr = 15 as Max<Sopfr<{rough: 5}>>

            const actual = compute23FreeRationalMonzosToCheck({max23FreeSopfr})

            const expected = [
                [0, 0, -3],
                [0, 0, -2],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -2],
                [0, 0, 0, -1],
                [0, 0, 0, 0, -1],
                [0, 0, 0, 0, 0, -1],
                [],
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1],
                [0, 0, 0, 2],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2],
                [0, 0, 3],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })

        it("returns the list of 2,3-free monzos to check, given only a max N2D3P9", (): void => {
            const maxN2D3P9 = 6 as Max<N2D3P9>

            const actual = compute23FreeRationalMonzosToCheck({maxN2D3P9})

            const expected = [
                [0, 0, -2, -1],
                [0, 0, -2],
                [0, 0, -2, 1],
                [0, 0, -1, -1],
                [0, 0, -1],
                [0, 0, -1, 1],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 1, -1],
                [0, 0, 1],
                [0, 0, 1, 1],
                [0, 0, 2, -1],
                [0, 0, 2],
                [0, 0, 2, 1],
            ] as Array<Monzo<{rational: true, rough: 5}>>
            expect(actual).toBeArrayWithDeepEqualContents(expected)
        })
    })

    describe("1 of 4 impossibilities, and 0 of 4 is certainly impossible", (): void => {
        it("fails when given only a max prime limit", (): void => {
            const maxPrimeLimit = 3 as Max<Max<Prime>>

            expect((): void => {
                compute23FreeRationalMonzosToCheck({maxPrimeLimit})
            }).toThrowError("The count of the primes must be constrained somehow.")
        })

        it("fails when given only a max 2,3-free CoPFR", (): void => {
            const max23FreeCopfr = 3 as Max<Copfr<{rough: 5}>>

            expect((): void => {
                compute23FreeRationalMonzosToCheck({max23FreeCopfr})
            }).toThrowError("The size of the primes must be constrained somehow.")
        })

        it("fails when given none of the maxes", (): void => {
            expect((): void => {
                compute23FreeRationalMonzosToCheck()
            }).toThrowError("The primes must be constrained somehow.")
        })
    })
})
