import { computeNumberFromRational, Monzo, Ratio, Rational } from "../../../../../src/general/math/rational"

describe("computeNumberFromRational", (): void => {
    it("works for rationals with monzos", (): void => {
        const rational: Rational = { monzo: [-2, 0, 1] as Monzo }

        const actual = computeNumberFromRational(rational)

        expect(actual).toBe(1.25)
    })

    it("works for rationals with ratios", (): void => {
        const rational: Rational = { ratio: [5, 4] as Ratio }

        const actual = computeNumberFromRational(rational)

        expect(actual).toBe(1.25)
    })
})
