import { computeMonzoFromRational, Monzo } from "../../../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../../../src/general/math/rational/ratio"

describe("computeMonzoFromRational", (): void => {
    it("returns the monzo, if present", (): void => {
        const rational = { monzo: [3, -2] as Monzo }

        const actual = computeMonzoFromRational(rational)

        expect(actual).toEqual(rational.monzo)
    })

    it("computes the monzo from the ratio otherwise", (): void => {
        const rational = { ratio: [3, 2] as Ratio }

        const actual = computeMonzoFromRational(rational)

        const expected = [-1, 1] as Monzo
        expect(actual).toEqual(expected)
    })
})
