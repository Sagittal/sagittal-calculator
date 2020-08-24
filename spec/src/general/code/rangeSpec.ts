import { computeRange } from "../../../../src/general/code"

describe("computeRange", () => {
    it("when given a single number, gives the set of integers from 0 to that number, excluding the number", (): void => {
        const firstParameter: number = 3

        const actual: number[] = computeRange(firstParameter)

        const expected = [0, 1, 2]
        expect(actual).toEqual(expected)
    })

    it("when given two numbers, gives the set of integers from the first number to the second number", (): void => {
        const firstParameter = -3
        const secondParameter = 7

        const actual: number[] = computeRange(firstParameter, secondParameter)

        const expected = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
        expect(actual).toEqual(expected)
    })
})
