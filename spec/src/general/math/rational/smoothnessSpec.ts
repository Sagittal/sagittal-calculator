import {
    computeIsSmoothRational,
    computeRationalSmoothness,
    Integer,
    Monzo,
    Ratio,
    Smoothness,
} from "../../../../../src/general/math"
import { computeIsSmoothInteger } from "../../../../../src/general/math/rational/smoothness"

describe("computeIsSmoothInteger", (): void => {
    it("works, example when it is true (no prime factors > smoothness)", (): void => {
        const integer = 35 as Integer
        const smoothness = 7 as 7 & Smoothness

        const actual = computeIsSmoothInteger(integer, smoothness)

        expect(actual).toBeTruthy()
    })

    it("works, example when it is false (some prime factors > smoothness)", (): void => {
        const integer = 35 as Integer
        const smoothness = 5 as 5 & Smoothness

        const actual = computeIsSmoothInteger(integer, smoothness)

        expect(actual).toBeFalsy()
    })
})

describe("computeIsSmoothRational", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the rational is smooth to the given smoothness", (): void => {
            const rational = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsSmoothRational(rational, 5 as 5 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not smooth to the given smoothness", (): void => {
            const rational = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsSmoothRational(rational, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the rational is smooth to the given smoothness", (): void => {
            const rational = { ratio: [7, 5] as Ratio }

            const actual = computeIsSmoothRational(rational, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not smooth to the given smoothness", (): void => {
            const rational = { ratio: [7, 5] as Ratio }

            const actual = computeIsSmoothRational(rational, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeRationalSmoothness", (): void => {
    it("works for rationals with monzos", (): void => {
        const rational = { monzo: [0, 4, 1, -3, 0, 1] as Monzo }

        const actual = computeRationalSmoothness(rational)

        const expected = 13 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for rationals with ratios", (): void => {
        const rational = { ratio: [7, 5] as Ratio }

        const actual = computeRationalSmoothness(rational)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })
})
