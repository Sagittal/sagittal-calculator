import { Copfr, Max, Prime, Sopfr } from "../../../../src/general"
import { N2D3P9 } from "../../../../src/sagittal/comma/evaluation/n2d3p9"
import { compute23FreeMonzosToCheck } from "../../../../src/scripts/pitch/twoThreeFreeMonzosToCheck"

describe("compute23FreeMonzosToCheck", () => {
    it("returns the list of 2,3-free monzos to check, given all four of the maxes", () => {
        const maxPrimeLimit = 7 as Max<Max<Prime>>
        const max23FreeSopfr = 15 as Max<Sopfr<5>>
        const max23FreeCopfr = 2 as Max<Copfr<5>>
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = compute23FreeMonzosToCheck({
            maxPrimeLimit,
            max23FreeSopfr,
            max23FreeCopfr,
            maxN2D3P9,
        })

        const expected = jasmine.arrayWithExactContents([
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
        ])
        expect(actual).toEqual(expected)
    })

    describe("3 of 4", () => {
        it("returns the list of 2,3-free monzos to check, given a max prime limit, a max 2,3-free sopfr, and a max 2,3-free copfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const max23FreeSopfr = 15 as Max<Sopfr<5>>
            const max23FreeCopfr = 2 as Max<Copfr<5>>

            const actual = compute23FreeMonzosToCheck({
                maxPrimeLimit,
                max23FreeSopfr,
                max23FreeCopfr,
            })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max prime limit, a max N2D3P9, and a max 2,3-free copfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxN2D3P9 = 5 as Max<N2D3P9>
            const max23FreeCopfr = 2 as Max<Copfr<5>>

            const actual = compute23FreeMonzosToCheck({
                maxPrimeLimit,
                maxN2D3P9,
                max23FreeCopfr,
            })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max 2,3-free sopfr, a max N2D3P9, and a max 2,3-free copfr", () => {
            const max23FreeSopfr = 15 as Max<Sopfr<5>>
            const maxN2D3P9 = 5 as Max<N2D3P9>
            const max23FreeCopfr = 2 as Max<Copfr<5>>

            const actual = compute23FreeMonzosToCheck({
                max23FreeSopfr,
                maxN2D3P9,
                max23FreeCopfr,
            })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max prime limit, a max N2D3P9, and a max 2,3-free sopfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const max23FreeSopfr = 15 as Max<Sopfr<5>>
            const maxN2D3P9 = 5 as Max<N2D3P9>

            const actual = compute23FreeMonzosToCheck({
                maxPrimeLimit,
                max23FreeSopfr,
                maxN2D3P9,
            })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })
    })

    describe("2 of 4", () => {
        it("returns the list of 2,3-free monzos to check, given a max prime limit and a max 2,3-free sopfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const max23FreeSopfr = 15 as Max<Sopfr<5>>

            const actual = compute23FreeMonzosToCheck({ maxPrimeLimit, max23FreeSopfr })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max prime limit and a max N2D3P9", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxN2D3P9 = 7 as Max<N2D3P9>

            const actual = compute23FreeMonzosToCheck({ maxPrimeLimit, maxN2D3P9 })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max prime limit and a max 2,3-free copfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const max23FreeCopfr = 3 as Max<Copfr<5>>

            const actual = compute23FreeMonzosToCheck({ maxPrimeLimit, max23FreeCopfr })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max 2,3-free sopfr and a max 2,3-free copfr", () => {
            const max23FreeSopfr = 20 as Max<Sopfr<5>>
            const max23FreeCopfr = 3 as Max<Copfr<5>>

            const actual = compute23FreeMonzosToCheck({ max23FreeSopfr, max23FreeCopfr })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max N2D3P9 and a max 2,3-free copfr", () => {
            const maxN2D3P9 = 9 as Max<N2D3P9>
            const max23FreeCopfr = 2 as Max<Copfr<5>>

            const actual = compute23FreeMonzosToCheck({ maxN2D3P9, max23FreeCopfr })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given a max N2D3P9 and a max 2,3-free sopfr", () => {
            const maxN2D3P9 = 6 as Max<N2D3P9>
            const max23FreeSopfr = 12 as Max<Sopfr<5>>

            const actual = compute23FreeMonzosToCheck({ maxN2D3P9, max23FreeSopfr })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })
    })

    describe("1 of 4 possibilities", () => {
        it("returns the list of 2,3-free monzos to check, given only a max 2,3-free sopfr", () => {
            const max23FreeSopfr = 15 as Max<Sopfr<5>>

            const actual = compute23FreeMonzosToCheck({ max23FreeSopfr })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 2,3-free monzos to check, given only a max N2D3P9", () => {
            const maxN2D3P9 = 6 as Max<N2D3P9>

            const actual = compute23FreeMonzosToCheck({ maxN2D3P9 })

            const expected = jasmine.arrayWithExactContents([
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
            ])
            expect(actual).toEqual(expected)
        })
    })

    describe("1 of 4 impossibilities, and 0 of 4 is certainly impossible", () => {
        it("fails when given only a max prime limit", () => {
            const maxPrimeLimit = 3 as Max<Max<Prime>>

            expect(() => compute23FreeMonzosToCheck({ maxPrimeLimit })).toThrowError("The count of the primes must be limited somehow.")
        })

        it("fails when given only a max 2,3-free copfr", () => {
            const max23FreeCopfr = 3 as Max<Copfr<5>>

            expect(() => compute23FreeMonzosToCheck({ max23FreeCopfr })).toThrowError("The size of the primes must be limited somehow.")
        })

        it("fails when given none of the maxs", () => {
            expect(() => compute23FreeMonzosToCheck()).toThrowError("The primes must be limited somehow.")
        })
    })
})
