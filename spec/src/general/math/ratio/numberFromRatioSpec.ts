import { computeNumberFromRatio, Ratio } from "../../../../../src/general/math/ratio"

describe("computeNumberFromRatio", (): void => {
    it("returns the numeric value of the ratio", (): void => {
        const ratio = [7, 6] as Ratio

        const actual = computeNumberFromRatio(ratio)

        const expected = 1.166667
        expect(actual).toBeCloseToTyped(expected)
    })
})