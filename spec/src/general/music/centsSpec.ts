import { Decimal } from "../../../../src/general/math"
import { Cents, computeCents } from "../../../../src/general/music"

describe("computeCents", (): void => {
    it("converts a number into cents", (): void => {
        const decimal = 1.5 as Decimal

        const actual = computeCents(decimal)

        const expected = 701.955001 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
