import { Count } from "../../../../src/general"
import { arraysHaveSameContents } from "../../../../src/general/code/arraysHaveSameContents"
import { computeCombinations } from "../../../../src/general/math"

describe("computeCombinations", () => {
    const set = ["a", "b", "c", "d"]
    it("given a set, will return all combinations of it with the specified count of elements", () => {
        const count = 2 as Count<string>

        const result = computeCombinations(set, count)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            ["a", "b"],
            ["a", "c"],
            ["a", "d"],
            ["b", "c"],
            ["b", "d"],
            ["c", "d"],
        ]))
    })

    it("when resolution is zero, returns an empty array", () => {
        const count = 0 as Count<string>

        const result = computeCombinations(set, count)

        expect(result).toEqual([])
    })

    it("works when with repeated elements is true", () => {
        const count = 2 as Count<string>

        const result = computeCombinations(set, count, { withRepeatedElements: true })

        const expectedResult = [
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
        ]

        expect(result.length).toBe(expectedResult.length)
        expectedResult.forEach(expectedResultElement => {
            expect(result.some(resultElement => {
                return arraysHaveSameContents(resultElement, expectedResultElement)
            })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
        })
    })

    it("works for big sets", () => {
        const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
        const count = 7 as Count<number>

        computeCombinations(set, count, { withRepeatedElements: true })
    })
})
