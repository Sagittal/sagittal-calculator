import { Monzo } from "../../../../../../src/general/math/rational/monzo"
import { computeRatioFromRational, Ratio } from "../../../../../../src/general/math/rational/ratio"

describe("computeRatioFromRational", (): void => {
    it("returns the ratio, if present", (): void => {
        const rational = { ratio: [3, 2] as Ratio }

        const actual = computeRatioFromRational(rational)

        expect(actual).toEqual(rational.ratio)
    })

    it("computes the ratio from the monzo otherwise", (): void => {
        const rational = { monzo: [-1, 1] as Monzo }

        const actual = computeRatioFromRational(rational)

        const expected = [3, 2] as Ratio
        expect(actual).toEqual(expected)
    })
})
