import { equalRationals, Ratio } from "../../../../../src/general/math"
import { Rational } from "../../../../../src/general/math/rational"
import { Monzo } from "../../../../../src/general/math/rational/monzo"

describe("equalRationals", (): void => {
    it("returns true if the monzos match", (): void => {
        const rationalA: Rational = { monzo: [0, 0, 1, -1] as Monzo }
        const rationalB: Rational = { monzo: [0, 0, 1, -1] as Monzo }

        const actual = equalRationals(rationalA, rationalB)

        expect(actual).toBeTruthy()
    })

    it("returns true if the ratios match", (): void => {
        const rationalA: Rational = { ratio: [5, 7] as Ratio }
        const rationalB: Rational = { ratio: [5, 7] as Ratio }

        const actual = equalRationals(rationalA, rationalB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzos do not match", (): void => {
        const rationalA: Rational = { monzo: [0, 0, 1, -1] as Monzo }
        const rationalB: Rational = { monzo: [0, 0, -1, -1] as Monzo }

        const actual = equalRationals(rationalA, rationalB)

        expect(actual).toBeFalsy()
    })

    it("returns false if the ratios do not match", (): void => {
        const rationalA: Rational = { ratio: [5, 7] as Ratio }
        const rationalB: Rational = { ratio: [5, 6] as Ratio }

        const actual = equalRationals(rationalA, rationalB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo of one represents the same rational as the ratio of the other", (): void => {
        const rationalA: Rational = { monzo: [0, 0, 1, -1] as Monzo }
        const rationalB: Rational = { ratio: [5, 7] as Ratio }

        const actual = equalRationals(rationalA, rationalB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo of one does not represent the same rational as the ratio of the other", (): void => {
        const rationalA: Rational = { monzo: [0, 0, 1, -1] as Monzo }
        const rationalB: Rational = { ratio: [5, 6] as Ratio }

        const actual = equalRationals(rationalA, rationalB)

        expect(actual).toBeFalsy()
    })

    it("works when monzos haven't been trimmed", (): void => {
        const rationalA: Rational = { monzo: [0, 0] as Monzo }
        const rationalB: Rational = { monzo: [0] as Monzo }

        const actual = equalRationals(rationalA, rationalB)

        expect(actual).toBeTruthy()
    })

    it("works when ratios haven't been reduced", (): void => {
        const rationalA: Rational = { ratio: [10, 14] as Ratio }
        const rationalB: Rational = { ratio: [5, 7] as Ratio }

        const actual = equalRationals(rationalA, rationalB)

        expect(actual).toBeTruthy()
    })
})
