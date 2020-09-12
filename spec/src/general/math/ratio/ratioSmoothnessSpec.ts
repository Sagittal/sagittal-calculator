import { Smoothness } from "../../../../../src/general/math"
import { computeIsSmoothRatio, Ratio } from "../../../../../src/general/math/ratio"

describe("computeIsSmoothRatio", () => {
    it("returns true if the ratio is smooth to the requested smoothness", () => {
        const ratio = [7, 5] as Ratio

        const actual = computeIsSmoothRatio(ratio, 7 as 7 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the ratio is not smooth to the requested smoothness", () => {
        const ratio = [7, 5] as Ratio

        const actual = computeIsSmoothRatio(ratio, 5 as 5 & Smoothness)

        expect(actual).toBeFalsy()
    })
})
