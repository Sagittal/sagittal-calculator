import { computeRange } from "../../../../src/general/code/range"

describe("computeRange", () => {
    it("when given a single number, gives the set of integers from 0 to that number, excluding the number", (): void => {
        const firstParameter: number = 3

        const result: number[] = computeRange(firstParameter)

        expect(result).toEqual([0, 1, 2])
    })

    it("when given two numbers, gives the set of integers from the first number to the second number", (): void => {
        const firstParameter = -3
        const secondParameter = 7

        const result: number[] = computeRange(firstParameter, secondParameter)

        expect(result).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6])
    })
})
