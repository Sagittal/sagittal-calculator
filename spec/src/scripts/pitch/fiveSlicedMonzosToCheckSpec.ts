import { Copfr, Max, Prime, Sopfr } from "../../../../src/general"
import { N2D3P9 } from "../../../../src/sagittal/commaEvaluation/n2d3p9"
import { computeFiveSlicedMonzosToCheck } from "../../../../src/scripts/pitch/fiveSlicedMonzosToCheck"

// TODO: Might it be preferable to do the strategy where instead of populating the whole list of monzos to check
//  you instead go with the technique the N2D3P9 is already taking with the prime exponent extremas?
//  that is maybe you should abstract/extract that bit in the popular ratios script group
//  which found a way to take some prime exponent extremas and check each of them
//  and just have the artifact from here be one of those extremas?
//  - might also save some energy, what with these all being mirrored

describe("computeFiveSlicedMonzosToCheck", () => {
    it("returns the list of 5-sliced monzos to check, given all four of the maxes", () => {
        const maxPrimeLimit = 7 as Max<Max<Prime>>
        const maxFiveRoughSopfr = 15 as Max<Sopfr<5>>
        const maxFiveRoughCopfr = 2 as Max<Copfr<5>>
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeFiveSlicedMonzosToCheck({
            maxPrimeLimit,
            maxFiveRoughSopfr,
            maxFiveRoughCopfr,
            maxN2D3P9,
        })

        const expected = jasmine.arrayWithExactContents([
            [-2],
            [-1, -1],
            [-1],
            [-1, 1],
            [0, -1],
            [],
            [0, 1],
            [1, -1],
            [1],
            [1, 1],
            [2],
        ])
        expect(actual).toEqual(expected)
    })

    describe("3 of 4", () => {
        it("returns the list of 5-sliced monzos to check, given a max prime limit, a max 5-rough sopfr, and a max 5-rough copfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxFiveRoughSopfr = 15 as Max<Sopfr<5>>
            const maxFiveRoughCopfr = 2 as Max<Copfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({
                maxPrimeLimit,
                maxFiveRoughSopfr,
                maxFiveRoughCopfr,
            })

            const expected = jasmine.arrayWithExactContents([
                [-2],
                [-1, -1],
                [-1],
                [-1, 1],
                [0, -2],
                [0, -1],
                [],
                [0, 1],
                [0, 2],
                [1, -1],
                [1],
                [1, 1],
                [2],
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given a max prime limit, a max N2D3P9, and a max 5-rough copfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxN2D3P9 = 5 as Max<N2D3P9>
            const maxFiveRoughCopfr = 2 as Max<Copfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({
                maxPrimeLimit,
                maxN2D3P9,
                maxFiveRoughCopfr,
            })

            const expected = jasmine.arrayWithExactContents([
                [-2],
                [-1, -1],
                [-1],
                [-1, 1],
                [0, -1],
                [],
                [0, 1],
                [1, -1],
                [1],
                [1, 1],
                [2],
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given a max 5-rough sopfr, a max N2D3P9, and a max 5-rough copfr", () => {
            const maxFiveRoughSopfr = 15 as Max<Sopfr<5>>
            const maxN2D3P9 = 5 as Max<N2D3P9>
            const maxFiveRoughCopfr = 2 as Max<Copfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({
                maxFiveRoughSopfr,
                maxN2D3P9,
                maxFiveRoughCopfr,
            })

            const expected = jasmine.arrayWithExactContents([
                [-2],
                [-1, -1],
                [-1],
                [-1, 1],
                [0, -1],
                [],
                [0, 1],
                [1, -1],
                [1],
                [1, 1],
                [2],
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given a max prime limit, a max N2D3P9, and a max 5-rough sopfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxFiveRoughSopfr = 15 as Max<Sopfr<5>>
            const maxN2D3P9 = 5 as Max<N2D3P9>

            const actual = computeFiveSlicedMonzosToCheck({
                maxPrimeLimit,
                maxFiveRoughSopfr,
                maxN2D3P9,
            })

            const expected = jasmine.arrayWithExactContents([
                [-2],
                [-1, -1],
                [-1],
                [-1, 1],
                [0, -1],
                [],
                [0, 1],
                [1, -1],
                [1],
                [1, 1],
                [2],
            ])
            expect(actual).toEqual(expected)
        })
    })

    describe("2 of 4", () => {
        it("returns the list of 5-sliced monzos to check, given a max prime limit and a max 5-rough sopfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxFiveRoughSopfr = 15 as Max<Sopfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({ maxPrimeLimit, maxFiveRoughSopfr })

            const expected = jasmine.arrayWithExactContents([
                [-3],
                [-2],
                [-1, -1],
                [-1],
                [-1, 1],
                [0, -2],
                [0, -1],
                [],
                [0, 1],
                [0, 2],
                [1, -1],
                [1],
                [1, 1],
                [2],
                [3],
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given a max prime limit and a max N2D3P9", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxN2D3P9 = 7 as Max<N2D3P9>

            const actual = computeFiveSlicedMonzosToCheck({ maxPrimeLimit, maxN2D3P9 })

            const expected = jasmine.arrayWithExactContents([
                [-2, -1],
                [-2],
                [-2, 1],
                [-1, -1],
                [-1],
                [-1, 1],
                [0, -1],
                [],
                [0, 1],
                [1, -1],
                [1],
                [1, 1],
                [2, -1],
                [2],
                [2, 1],
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given a max prime limit and a max 5-rough copfr", () => {
            const maxPrimeLimit = 7 as Max<Max<Prime>>
            const maxFiveRoughCopfr = 3 as Max<Copfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({ maxPrimeLimit, maxFiveRoughCopfr })

            const expected = jasmine.arrayWithExactContents([
                [-3],
                [-2, -1],
                [-2],
                [-2, 1],
                [-1, -2],
                [-1, -1],
                [-1],
                [-1, 1],
                [-1, 2],
                [0, -3],
                [0, -2],
                [0, -1],
                [],
                [0, 1],
                [0, 2],
                [0, 3],
                [1, -2],
                [1, -1],
                [1],
                [1, 1],
                [1, 2],
                [2, -1],
                [2],
                [2, 1],
                [3],
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given a max 5-rough sopfr and a max 5-rough copfr", () => {
            const maxFiveRoughSopfr = 20 as Max<Sopfr<5>>
            const maxFiveRoughCopfr = 3 as Max<Copfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({ maxFiveRoughSopfr, maxFiveRoughCopfr })

            const expected = jasmine.arrayWithExactContents([
                [-3],
                [-2, -1],
                [-2],
                [-2, 1],
                [-1, -2],
                [-1, -1],
                [-1, 0, -1],
                [-1, 0, 0, -1],
                [-1],
                [-1, 0, 0, 1],
                [-1, 0, 1],
                [-1, 1],
                [-1, 2],
                [0, -2],
                [0, -1, -1],
                [0, -1, 0, -1],
                [0, -1],
                [0, -1, 0, 1],
                [0, -1, 1],
                [0, 0, -1],
                [0, 0, 0, -1],
                [0, 0, 0, 0, -1],
                [0, 0, 0, 0, 0, -1],
                [],
                [0, 0, 0, 0, 0, 1],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 1],
                [0, 0, 1],
                [0, 1, -1],
                [0, 1, 0, -1],
                [0, 1],
                [0, 1, 0, 1],
                [0, 1, 1],
                [0, 2],
                [1, -2],
                [1, -1],
                [1, 0, -1],
                [1, 0, 0, -1],
                [1],
                [1, 0, 0, 1],
                [1, 0, 1],
                [1, 1],
                [1, 2],
                [2, -1],
                [2],
                [2, 1],
                [3],
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given a max N2D3P9 and a max 5-rough copfr", () => {
            const maxN2D3P9 = 9 as Max<N2D3P9>
            const maxFiveRoughCopfr = 2 as Max<Copfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({ maxN2D3P9, maxFiveRoughCopfr })

            const expected = jasmine.arrayWithExactContents([
                [ -2 ],
                [ -1, -1 ],
                [ -1, 0, -1 ],
                [ -1 ],
                [ -1, 0, 1 ],
                [ -1, 1 ],
                [ 0, -1, -1 ],
                [ 0, -1 ],
                [ 0, -1, 1 ],
                [ 0, 0, -1 ],
                [  ],
                [ 0, 0, 1 ],
                [ 0, 1, -1 ],
                [ 0, 1 ],
                [ 0, 1, 1 ], // N2D3P9(77) = 23.5, but that's okay; it'll get filtered later. this is just possibilities
                [ 1, -1 ],
                [ 1, 0, -1 ],
                [ 1 ],
                [ 1, 0, 1 ],
                [ 1, 1 ],
                [ 2 ]
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given a max N2D3P9 and a max 5-rough sopfr", () => {
            const maxN2D3P9 = 6 as Max<N2D3P9>
            const maxFiveRoughSopfr = 12 as Max<Sopfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({ maxN2D3P9, maxFiveRoughSopfr })

            const expected = jasmine.arrayWithExactContents([
                [ -2 ],
                [ -1, -1 ],
                [ -1 ],
                [ -1, 1 ],
                [ 0, -1 ],
                [  ],
                [ 0, 1 ],
                [ 1, -1 ],
                [ 1 ],
                [ 1, 1 ],
                [ 2 ]
            ])
            expect(actual).toEqual(expected)
        })
    })

    describe("1 of 4 possibilities", () => {
        it("returns the list of 5-sliced monzos to check, given only a max 5-rough sopfr", () => {
            const maxFiveRoughSopfr = 15 as Max<Sopfr<5>>

            const actual = computeFiveSlicedMonzosToCheck({ maxFiveRoughSopfr })

            const expected = jasmine.arrayWithExactContents([
                [-3],
                [-2],
                [-1, -1],
                [-1],
                [-1, 1],
                [0, -2],
                [0, -1],
                [0, 0, -1],
                [0, 0, 0, -1],
                [],
                [0, 0, 0, 1],
                [0, 0, 1],
                [0, 1],
                [0, 2],
                [1, -1],
                [1],
                [1, 1],
                [2],
                [3],
            ])
            expect(actual).toEqual(expected)
        })

        it("returns the list of 5-sliced monzos to check, given only a max N2D3P9", () => {
            const maxN2D3P9 = 6 as Max<N2D3P9>

            const actual = computeFiveSlicedMonzosToCheck({ maxN2D3P9 })

            const expected = jasmine.arrayWithExactContents([
                [-2, -1],
                [-2],
                [-2, 1],
                [-1, -1],
                [-1],
                [-1, 1],
                [0, -1],
                [],
                [0, 1],
                [1, -1],
                [1],
                [1, 1],
                [2, -1],
                [2],
                [2, 1],
            ])
            expect(actual).toEqual(expected)
        })
    })

    describe("1 of 4 impossibilities, and 0 of 4 is certainly impossible", () => {
        it("fails when given only a max prime limit", () => {
            const maxPrimeLimit = 3 as Max<Max<Prime>>

            expect(() => computeFiveSlicedMonzosToCheck({ maxPrimeLimit })).toThrowError("The count of the primes must be limited somehow.")
        })

        it("fails when given only a max 5-rough copfr", () => {
            const maxFiveRoughCopfr = 3 as Max<Copfr<5>>

            expect(() => computeFiveSlicedMonzosToCheck({ maxFiveRoughCopfr })).toThrowError("The size of the primes must be limited somehow.")
        })

        it("fails when given none of the maxs", () => {
            expect(() => computeFiveSlicedMonzosToCheck()).toThrowError("The primes must be limited somehow.")
        })
    })
})
