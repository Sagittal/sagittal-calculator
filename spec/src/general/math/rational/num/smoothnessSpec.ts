import {
    computeRationalNumSmoothness,
    Integer,
    isSmoothRationalNum,
    Ratio, RationalNum,
    Smoothness,
} from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/math/num/monzo"

describe("isSmoothRationalNum", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the rational num is smooth to the given smoothness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as Monzo }

            const actual = isSmoothRationalNum(rationalNum, 5 as 5 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not smooth to the given smoothness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as Monzo }

            const actual = isSmoothRationalNum(rationalNum, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the rational num is smooth to the given smoothness", (): void => {
            const rationalNum = { ratio: [7, 5] as Ratio }

            const actual = isSmoothRationalNum(rationalNum, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not smooth to the given smoothness", (): void => {
            const rationalNum = { ratio: [7, 5] as Ratio }

            const actual = isSmoothRationalNum(rationalNum, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by (integer) decimal", (): void => {
        it("returns true if the rational num is smooth to the given smoothness", (): void => {
            const rationalNum = { decimal: 14 as Integer }

            const actual = isSmoothRationalNum(rationalNum, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not smooth to the given smoothness", (): void => {
            const rationalNum = { decimal: 14 as Integer }

            const actual = isSmoothRationalNum(rationalNum, 3 as 3 & Smoothness)

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