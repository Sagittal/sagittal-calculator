import { Integer } from "../../../../src/general"
import { computePlusOrMinusRange } from "../../../../src/general/code"

describe("computePlusOrMinusRange", (): void => {
    it("given an integer, returns a range of integers from -integer to +integer", (): void => {
        const integer = 5 as Integer

        const actual = computePlusOrMinusRange(integer)

        expect(actual as number[]).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    })
})
