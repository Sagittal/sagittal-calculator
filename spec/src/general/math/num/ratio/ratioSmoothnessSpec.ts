import { Smoothness } from "../../../../../../src/general/math"
import { isSmoothRatio, Ratio } from "../../../../../../src/general/math/num/ratio"

describe("isSmoothRatio", (): void => {
    it("returns true if the ratio is smooth to the requested smoothness", (): void => {
        const ratio = [7, 5] as Ratio

        const actual = isSmoothRatio(ratio, 7 as 7 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the ratio is not smooth to the requested smoothness", (): void => {
        const ratio = [7, 5] as Ratio

        const actual = isSmoothRatio(ratio, 5 as 5 & Smoothness)

        expect(actual).toBeFalsy()
    })
})
