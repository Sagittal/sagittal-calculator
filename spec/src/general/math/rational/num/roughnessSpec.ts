import { FIVE_ROUGHNESS, Integer, isRoughRationalNum, Ratio, Roughness } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/math/num/monzo"

describe("isRoughRationalNum", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as Monzo }

            const actual = isRoughRationalNum(rationalNum, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not rough to the given roughness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as Monzo }

            const actual = isRoughRationalNum(rationalNum, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { ratio: [7, 5] as Ratio }

            const actual = isRoughRationalNum(rationalNum, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is not rough to the given roughness", (): void => {
            const rationalNum = { ratio: [5, 4] as Ratio }

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
