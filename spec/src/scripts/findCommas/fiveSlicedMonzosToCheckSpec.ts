import { Prime } from "../../../../src/general"
import { Copfr, Sopfr } from "../../../../src/general/music"
import { computeFiveSlicedMonzosToCheck } from "../../../../src/scripts/findCommas/fiveSlicedMonzosToCheck"

describe("computeFiveSlicedMonzosToCheck", () => {
    it("returns the list of 5-sliced monzos to check, given a maximum prime limit, a maximum 5-rough sopfr, and a maximum 5-rough copfr", () => {
        const maximumPrimeLimit = 7 as Prime
        const maximumFiveRoughSopfr = 15 as Sopfr<5>
        const maximumFiveRoughCopfr = 2 as Copfr<5>

        const result = computeFiveSlicedMonzosToCheck({
            maximumPrimeLimit,
            maximumFiveRoughSopfr,
            maximumFiveRoughCopfr,
        })

        expect(result).toEqual(jasmine.arrayWithExactContents([
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
        ]))
    })

    it("returns the list of 5-sliced monzos to check, given a maximum prime limit and a maximum 5-rough sopfr", () => {
        const maximumPrimeLimit = 7 as Prime
        const maximumFiveRoughSopfr = 15 as Sopfr<5>

        const result = computeFiveSlicedMonzosToCheck({ maximumPrimeLimit, maximumFiveRoughSopfr })

        expect(result).toEqual(jasmine.arrayWithExactContents([
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
        ]))
    })

    it("returns the list of 5-sliced monzos to check, given a maximum prime limit and a maximum 5-rough copfr", () => {
        const maximumPrimeLimit = 7 as Prime
        const maximumFiveRoughCopfr = 3 as Copfr<5>

        const result = computeFiveSlicedMonzosToCheck({ maximumPrimeLimit, maximumFiveRoughCopfr })

        expect(result).toEqual(jasmine.arrayWithExactContents([
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
        ]))
    })

    it("returns the list of 5-sliced monzos to check, given a maximum 5-rough sopfr and a maximum 5-rough copfr", () => {
        const maximumFiveRoughSopfr = 20 as Sopfr<5>
        const maximumFiveRoughCopfr = 3 as Copfr<5>

        const result = computeFiveSlicedMonzosToCheck({ maximumFiveRoughSopfr, maximumFiveRoughCopfr })

        expect(result).toEqual(jasmine.arrayWithExactContents([
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
        ]))
    })

    it("returns the list of 5-sliced monzos to check, when given only a maximum 5-rough sopfr", () => {
        const maximumFiveRoughSopfr = 15 as Sopfr<5>

        const result = computeFiveSlicedMonzosToCheck({ maximumFiveRoughSopfr })

        expect(result).toEqual(jasmine.arrayWithExactContents([
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
        ]))
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
