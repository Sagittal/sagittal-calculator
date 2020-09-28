import { computeRange } from "../../../../src/general/code"
import { IntegerDecimal } from "../../../../src/general/math"

describe("computeRange", (): void => {
    it(
        "when given a single integer, gives the set of integers from 0 to that number, excluding the number",
        (): void => {
            const firstParameter = 3 as IntegerDecimal

            const actual = computeRange(firstParameter)

            const expected = [0, 1, 2] as IntegerDecimal[]
            expect(actual).toEqual(expected)
        },
    )

    it("when given two integers, gives the set of integers from the first number to the second number, excluding the greater number", (): void => {
        const firstParameter = -3 as IntegerDecimal
        const secondParameter = 7 as IntegerDecimal

        const actual = computeRange(firstParameter, secondParameter)

        const expected = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6] as IntegerDecimal[]
        expect(actual).toEqual(expected)
    })
})
