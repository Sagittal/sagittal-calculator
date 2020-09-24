import { Decimal } from "../../../../../../src/general/math"
import { computeDecimalFromRatio, Ratio } from "../../../../../../src/general/math/rational/ratio"

describe("computeDecimalFromRatio", (): void => {
    it("returns the decimal representation of the ratio", (): void => {
        const ratio = [7, 6] as Ratio

        const actual = computeDecimalFromRatio(ratio)

        const expected = 1.166667 as Decimal
        expect(actual).toBeCloseToTyped(expected)
    })
})
