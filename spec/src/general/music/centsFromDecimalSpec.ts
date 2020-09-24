import { Decimal } from "../../../../src/general/math"
import { Cents, computeCentsFromDecimal } from "../../../../src/general/music"

describe("computeCentsFromDecimal", (): void => {
    it("converts a number into cents", (): void => {
        const decimal = 1.5 as Decimal

        const actual = computeCentsFromDecimal(decimal)

        const expected = 701.955001 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
