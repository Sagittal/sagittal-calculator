import { computeDecimalFromMonzo, Decimal } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/math/numeric/monzo"

describe("computeDecimalFromMonzo", (): void => {
    it("returns the decimal representation of the monzo", (): void => {
        const monzo = [-1, -1, 0, 1] as Monzo   // 7/6

        const actual = computeDecimalFromMonzo(monzo)

        const expected = 1.166667 as Decimal
        expect(actual).toBeCloseToTyped(expected)
    })
})