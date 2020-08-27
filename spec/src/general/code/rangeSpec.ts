import { computeRange } from "../../../../src/general/code"
import { Integer } from "../../../../src/general/math"

describe("computeRange", () => {
    it("when given a single integer, gives the set of integers from 0 to that number, excluding the number", () => {
        const firstParameter = 3 as Integer

        const actual = computeRange(firstParameter)

        const expected = [0, 1, 2] as Integer[]
        expect(actual).toEqual(expected)
    })

    it("when given two integers, gives the set of integers from the first number to the second number, excluding the greater number", () => {
        const firstParameter = -3 as Integer
        const secondParameter = 7 as Integer

        const actual = computeRange(firstParameter, secondParameter)

        const expected = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6] as Integer[]
        expect(actual).toEqual(expected)
    })
})
