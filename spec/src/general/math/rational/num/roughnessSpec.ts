import {
    FIVE_ROUGHNESS,
    Integer,
    isRoughRationalNum,
    RationalMonzo,
    RationalQuotient,
    Roughness,
} from "../../../../../../src/general/math"

describe("isRoughRationalNum", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isRoughRationalNum(rationalNum, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not rough to the given roughness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isRoughRationalNum(rationalNum, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns true if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { quotient: [7, 5] as RationalQuotient }

            const actual = isRoughRationalNum(rationalNum, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not rough to the given roughness", (): void => {
            const rationalNum = { quotient: [5, 4] as RationalQuotient }

            const actual = isRoughRationalNum(rationalNum, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by (integer) decimal", (): void => {
        it("returns true if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { decimal: 5 as Integer }

            const actual = isRoughRationalNum(rationalNum, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not rough to the given roughness", (): void => {
            const rationalNum = { decimal: 5 as Integer }

            const actual = isRoughRationalNum(rationalNum, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })
})
