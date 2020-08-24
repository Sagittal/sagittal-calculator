import { Prime } from "../../../../src/general"
import { Copfr, Sopfr } from "../../../../src/general/music"
import { computeFiveSlicedMonzosToCheck } from "../../../../src/scripts/findCommas/fiveSlicedMonzosToCheck"

// todo: currently if you don't provide sopfr you must provide both max copfr and prime limit.
//  but a maximum N2D3P9 would also suffice.
//  basically it's the same behavior as max sopfr. you could have either or both.
//  Add tests to recognize that.
//  I'm honestly not even sure if the way I've implemented the maximum N2D3P9 here now even works,
//  so this is pretty high priority among the to-dos
//  and wait... don't I need a way to find the maximum prime w/r/t maximum N2D3P9, too?
//  it would be in the numerator, not the denominator, FWIW...
//  I think we'd just take that easy peasy numerator formula and keep going until we exceeded max N2D3P9.
//  or we could use the exponent extra we newly gather below
//  also we should totally extract this and test it separately
//  ...okay, it has been extracted, but not tested yet, and we're not using N2D3P9 there yet

describe("computeFiveSlicedMonzosToCheck", () => {
    it("returns the list of 5-sliced monzos to check, given a maximum prime limit, a maximum 5-rough sopfr, and a maximum 5-rough copfr", () => {
        const maximumPrimeLimit = 7 as Prime
        const maximumFiveRoughSopfr = 15 as Sopfr<5>
        const maximumFiveRoughCopfr = 2 as Copfr<5>

        const actual = computeFiveSlicedMonzosToCheck({
            maximumPrimeLimit,
            maximumFiveRoughSopfr,
            maximumFiveRoughCopfr,
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

    it("returns the list of 5-sliced monzos to check, given a maximum prime limit and a maximum 5-rough sopfr", () => {
        const maximumPrimeLimit = 7 as Prime
        const maximumFiveRoughSopfr = 15 as Sopfr<5>

        const actual = computeFiveSlicedMonzosToCheck({ maximumPrimeLimit, maximumFiveRoughSopfr })

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

    it("returns the list of 5-sliced monzos to check, given a maximum prime limit and a maximum 5-rough copfr", () => {
        const maximumPrimeLimit = 7 as Prime
        const maximumFiveRoughCopfr = 3 as Copfr<5>

        const actual = computeFiveSlicedMonzosToCheck({ maximumPrimeLimit, maximumFiveRoughCopfr })

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

    it("returns the list of 5-sliced monzos to check, given a maximum 5-rough sopfr and a maximum 5-rough copfr", () => {
        const maximumFiveRoughSopfr = 20 as Sopfr<5>
        const maximumFiveRoughCopfr = 3 as Copfr<5>

        const actual = computeFiveSlicedMonzosToCheck({ maximumFiveRoughSopfr, maximumFiveRoughCopfr })

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

    it("returns the list of 5-sliced monzos to check, when given only a maximum 5-rough sopfr", () => {
        const maximumFiveRoughSopfr = 15 as Sopfr<5>

        const actual = computeFiveSlicedMonzosToCheck({ maximumFiveRoughSopfr })

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

    it("fails when given only a maximum prime limit", () => {
        const maximumPrimeLimit = 3 as Prime

        expect(() => computeFiveSlicedMonzosToCheck({ maximumPrimeLimit })).toThrowError("The count of the primes must be limited somehow.")
    })

    it("fails when given only a maximum 5-rough copfr", () => {
        const maximumFiveRoughCopfr = 3 as Copfr<5>

        expect(() => computeFiveSlicedMonzosToCheck({ maximumFiveRoughCopfr })).toThrowError("The size of the primes must be limited somehow.")
    })

    it("fails when given none of the maximums", () => {
        expect(() => computeFiveSlicedMonzosToCheck()).toThrowError("The primes must be limited somehow.")
    })
})
