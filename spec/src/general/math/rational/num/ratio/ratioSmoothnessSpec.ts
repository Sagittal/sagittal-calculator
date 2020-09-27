import { RationalRatio, Smoothness } from "../../../../../../../src/general/math"
import { isSmoothRationalRatio } from "../../../../../../../src/general/math/rational/num/ratio"

describe("isSmoothRationalRatio", (): void => {
    it("returns true if the ratio is smooth to the requested smoothness", (): void => {
        const rationalRatio = [7, 5] as RationalRatio

        const actual = isSmoothRationalRatio(rationalRatio, 7 as 7 & Smoothness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the ratio is not smooth to the requested smoothness", (): void => {
        const rationalRatio = [7, 5] as RationalRatio

        const actual = isSmoothRationalRatio(rationalRatio, 5 as 5 & Smoothness)

        expect(actual).toBeFalsy()
    })
})
