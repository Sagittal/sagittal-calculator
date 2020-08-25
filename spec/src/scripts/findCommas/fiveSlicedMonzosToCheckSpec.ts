import { Max, Prime } from "../../../../src/general"
import { Copfr, Sopfr } from "../../../../src/general/music"
import { computeFiveSlicedMonzosToCheck } from "../../../../src/scripts/findCommas/fiveSlicedMonzosToCheck"

// todo: currently if you don't provide sopfr you must provide both max copfr and prime limit.
//  but a max N2D3P9 would also suffice.
//  basically it's the same behavior as max sopfr. you could have either or both.
//  Add tests to recognize that.
//  I'm honestly not even sure if the way I've implemented the max N2D3P9 here now even works,
//  so this is pretty high priority among the to-dos
//  and wait... don't I need a way to find the max prime w/r/t max N2D3P9, too?
//  it would be in the numerator, not the denominator, FWIW...
//  I think we'd just take that easy peasy numerator formula and keep going until we exceeded max N2D3P9.
//  or we could use the exponent extra we newly gather below
//  also we should totally extract this and test it separately
//  ...okay, it has been extracted, but not tested yet, and we're not using N2D3P9 there yet

describe("computeFiveSlicedMonzosToCheck", () => {
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

    it("returns the list of 5-sliced monzos to check, when given only a max 5-rough sopfr", () => {
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
