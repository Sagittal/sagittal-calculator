import { RealDecimal } from "../../../../src/general/math"
import { Cents, computeCents } from "../../../../src/general/music"

describe("computeCents", (): void => {
    it("converts a number into cents", (): void => {
        const realDecimal = 1.5 as RealDecimal

        const actual = computeCents(realDecimal)

        const expected = 701.955001 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
