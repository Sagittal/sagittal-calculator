import { IntegerDecimal } from "../../../../src/general"
import { computePlusOrMinusRange } from "../../../../src/general/code"

describe("computePlusOrMinusRange", (): void => {
    it("given an integer decimal, returns a range of integers from -integer to +integer", (): void => {
        const integerDecimal = 5 as IntegerDecimal

        const actual = computePlusOrMinusRange(integerDecimal)

        expect(actual as number[]).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    })
})
