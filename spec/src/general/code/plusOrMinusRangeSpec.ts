import { computePlusOrMinusRange } from "../../../../src/general/code"

describe("computePlusOrMinusRange", () => {
    it("given a number, returns a range from -number to +number", () => {
        const number = 5

        const actual = computePlusOrMinusRange(number)

        expect(actual as number[]).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
    })
})
