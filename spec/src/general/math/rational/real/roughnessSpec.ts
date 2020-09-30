import {
    FIVE_ROUGHNESS,
    IntegerDecimal,
    isRoughRational, RationalDecimal,
    RationalMonzo,
    RationalQuotient,
    Roughness,
} from "../../../../../../src/general/math"

describe("isRoughRational", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the rational is rough to the given roughness", (): void => {
            const rational = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isRoughRational(rational, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not rough to the given roughness", (): void => {
            const rational = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isRoughRational(rational, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns true if the rational is rough to the given roughness", (): void => {
            const rational = { quotient: [7, 5] as RationalQuotient }

            const actual = isRoughRational(rational, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not rough to the given roughness", (): void => {
            const rational = { quotient: [5, 4] as RationalQuotient }

            const actual = isRoughRational(rational, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the rational is rough to the given roughness", (): void => {
            const rational = { decimal: 5 as RationalDecimal }

            const actual = isRoughRational(rational, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not rough to the given roughness", (): void => {
            const rational = { decimal: 5 as RationalDecimal }

            const actual = isRoughRational(rational, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by direct decimal", (): void => {
        it("returns true if the rational is rough to the given roughness", (): void => {
            const rationalDecimal = 5 as RationalDecimal

            const actual = isRoughRational(rationalDecimal, FIVE_ROUGHNESS)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not rough to the given roughness", (): void => {
            const rationalDecimal = 5 as RationalDecimal

            const actual = isRoughRational(rationalDecimal, 7 as 7 & Roughness)

            expect(actual).toBeFalsy()
        })
    })
})
