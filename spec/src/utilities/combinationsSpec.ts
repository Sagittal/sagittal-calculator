import { computeCombinations } from "../../../src/utilities/combinations"
import { arraysHaveSameContents } from "../../../src/utilities/arraysHaveSameContents"
import { Count } from "../../../src/utilities/types"

describe("computeCombinations", () => {
    const set = ["a", "b", "c", "d"]
    it("given a set, will return all combinations of it with the specified count of elements", () => {
        const count = 2 as Count

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
        const count = 0 as Count

        const result = computeCombinations(set, count)

        expect(result).toEqual([])
    })

    it("works when with repeated elements is true", () => {
        const count = 2 as Count

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

        expectedResult.forEach(expectedResultElement => {
            expect(result.some(resultElement => {
                return arraysHaveSameContents(resultElement, expectedResultElement)
            })).toBeTruthy(`This expected element was not found: ${JSON.stringify(expectedResultElement)}`)
        })
    })
})
