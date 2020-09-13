import { Direction, Ratio } from "../../../../src/general"
import { computeSuperRatio } from "../../../../src/general/math"

describe("computeSuperRatio", () => {
    const expected = [5, 4] as Ratio<{ direction: Direction.SUPER }>

    it("returns the ratio unchanged if the numerator is already greater than the denominator", () => {
        const ratio = [5, 4] as Ratio

        const actual = computeSuperRatio(ratio)

        expect(actual).toEqual(expected)
    })

    it("returns the reciprocal of the ratio if the numerator is lesser than the denominator", () => {
        const ratio = [4, 5] as Ratio

        const actual = computeSuperRatio(ratio)

        expect(actual).toEqual(expected)
    })
})
