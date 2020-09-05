import { Combinations, Count } from "../../../../src/general"
import { computeCombinations } from "../../../../src/general/math"

describe("computeCombinations", () => {
    const set = ["a", "b", "c", "d"]
    it("given a set, will return all combinations of it with the specified count of elements", () => {
        const count = 2 as Count<string>

        const actual = computeCombinations(set, count)

        const expected: jasmine.ArrayContaining<string[]> = jasmine.arrayWithExactContents([
            ["a", "b"],
            ["a", "c"],
            ["a", "d"],
            ["b", "c"],
            ["b", "d"],
            ["c", "d"],
        ])
        expect(actual).toEqual(expected)
    })

    it("when count is zero, returns an empty array", () => {
        const count = 0 as Count<string>

        const actual = computeCombinations(set, count)

        const expected: Combinations<string> = [] as unknown[] as Combinations<string>
        expect(actual).toEqual(expected)
    })

    it("works when with repeated elements is true", () => {
        const count = 2 as Count<string>

        const actual = computeCombinations(set, count, { withRepeatedElements: true })

        const expected = [
            ["a", "a"],
            ["a", "b"],
            ["a", "c"],
            ["a", "d"],
            ["b", "b"],
            ["b", "c"],
            ["b", "d"],
            ["c", "c"],
            ["c", "d"],
            ["d", "d"],
        ] as Combinations<string>

        expect(actual).toBeSameCombinationsAs(expected)
    })

    it("works for big sets", () => {
        const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        const count = 7 as Count<number>

        computeCombinations(set, count, { withRepeatedElements: true })
    })
})
