import { computeIsRoughInteger, FIVE_ROUGHNESS, Monzo, Ratio } from "../../../../../src/general"
import { computeIsRoughRationalNum, Integer, Roughness } from "../../../../../src/general/math"
import { computeRoughInteger } from "../../../../../src/general/math/rational/roughness"

describe("isRoughInteger", (): void => {
    it("works for integers", (): void => {
        const integer = 221 as Integer
        const roughness = 11 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })

    it("works for integers, example where it is false", (): void => {
        const integer = 33 as Integer
        const roughness = 5 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeFalsy()
    })

    it("1 is always rough", (): void => {
        const integer = 1 as Integer
        const roughness = 5 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })

    it("another example", (): void => {
        const integer = 10 as Integer
        const roughness = 11 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeFalsy()
    })

    it("even more examples", (): void => {
        const integer = 11 as Integer
        const roughness = 11 as Roughness

        const actual = computeIsRoughInteger(integer, roughness)

        expect(actual).toBeTruthy()
    })
})

describe("computeRoughInteger", (): void => {
    it("roughens the number to the desired roughness", (): void => {
        const integer = 1155 as Integer      // 3 * 5 * 7 * 11
        const roughness = 7 as Roughness

        const actual = computeRoughInteger(integer, roughness)

        const expected = 77 as Integer
        expect(actual).toBe(expected)
    })
})

describe("computeIsRoughRationalNum", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsRoughRationalNum(rationalNum, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { monzo: [0, 0, 1] as Monzo }

            const actual = computeIsRoughRationalNum(rationalNum, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by ratio", (): void => {
        it("returns true if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { ratio: [7, 5] as Ratio }

            const actual = computeIsRoughRationalNum(rationalNum, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational num is rough to the given roughness", (): void => {
            const rationalNum = { ratio: [5, 4] as Ratio }

            const actual = computeIsRoughRationalNum(rationalNum, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        // todo test
    })
})
