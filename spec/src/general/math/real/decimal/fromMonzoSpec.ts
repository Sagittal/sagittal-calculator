import { computeRealDecimalFromRealMonzo, RealDecimal } from "../../../../../../src/general/math"
import { RealMonzo } from "../../../../../../src/general/math/real/monzo"

describe("computeRealDecimalFromRealMonzo", (): void => {
    it("returns the decimal representation of the monzo", (): void => {
        const monzo = [-1, -1, 0, 1] as RealMonzo   // 7/6

        const actual = computeRealDecimalFromRealMonzo(monzo)

        const expected = 1.166667 as RealDecimal
        expect(actual).toBeCloseToTyped(expected)
    })
})
