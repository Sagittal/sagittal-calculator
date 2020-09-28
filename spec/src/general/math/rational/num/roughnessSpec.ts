import {
    FIVE_ROUGHNESS,
    IntegerDecimal,
    isRoughRatio, RationalDecimal,
    RationalMonzo,
    RationalQuotient,
    Roughness,
} from "../../../../../../src/general/math"

describe("isRoughRatio", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the ratio is rough to the given roughness", (): void => {
            const ratio = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isRoughRatio(ratio, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is not rough to the given roughness", (): void => {
            const ratio = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isRoughRatio(ratio, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns true if the ratio is rough to the given roughness", (): void => {
            const ratio = { quotient: [7, 5] as RationalQuotient }

            const actual = isRoughRatio(ratio, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is not rough to the given roughness", (): void => {
            const ratio = { quotient: [5, 4] as RationalQuotient }

            const actual = isRoughRatio(ratio, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the ratio is rough to the given roughness", (): void => {
            const ratio = { decimal: 5 as RationalDecimal }

            const actual = isRoughRatio(ratio, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is not rough to the given roughness", (): void => {
            const ratio = { decimal: 5 as RationalDecimal }

            const actual = isRoughRatio(ratio, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })
})
