import {
    FIVE_ROUGHNESS,
    Integer,
    isRoughRationalNum,
    RationalMonzo,
    RationalRatio,
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

    describe("by ratio", (): void => {
        it("returns true if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { ratio: [7, 5] as RationalRatio }

            const actual = isRoughRationalNum(rationalNum, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not rough to the given roughness", (): void => {
            const rationalNum = { ratio: [5, 4] as RationalRatio }

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
