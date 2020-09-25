import {
    computeIsSmoothRational,
    computeRationalNumSmoothness,
    Integer,
    Monzo,
    Ratio,
    Smoothness,
} from "../../../../../src/general/math"
import { RationalNum } from "../../../../../src/general/math/rational"
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
        it("returns true if the rational num is smooth to the given smoothness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsSmoothRational(rationalNum, 5 as 5 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not smooth to the given smoothness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsSmoothRational(rationalNum, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the rational num is smooth to the given smoothness", (): void => {
            const rationalNum = { ratio: [7, 5] as Ratio }

            const actual = computeIsSmoothRational(rationalNum, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not smooth to the given smoothness", (): void => {
            const rationalNum = { ratio: [7, 5] as Ratio }

            const actual = computeIsSmoothRational(rationalNum, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by (integer) decimal", (): void => {
        it("returns true if the rational num is smooth to the given smoothness", (): void => {
            const rationalNum = { decimal: 14 as Integer }

            const actual = computeIsSmoothRational(rationalNum, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not smooth to the given smoothness", (): void => {
            const rationalNum = { decimal: 14 as Integer }

            const actual = computeIsSmoothRational(rationalNum, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeRationalNumSmoothness", (): void => {
    it("works for rational nums with monzos", (): void => {
        const rationalNum = { monzo: [0, 4, 1, -3, 0, 1] as Monzo }

        const actual = computeRationalNumSmoothness(rationalNum)

        const expected = 13 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for rational nums with ratios", (): void => {
        const rationalNum = { ratio: [7, 5] as Ratio }

        const actual = computeRationalNumSmoothness(rationalNum)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for rational nums with (integer) decimals", (): void => {
        const rationalNum: RationalNum = { decimal: 14 as Integer }

        const actual = computeRationalNumSmoothness(rationalNum)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })
})
