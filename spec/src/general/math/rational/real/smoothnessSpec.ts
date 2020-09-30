import {
    computeRationalSmoothness,
    isSmoothRational,
    Rational,
    RationalDecimal,
    RationalMonzo,
    RationalQuotient,
    Smoothness,
} from "../../../../../../src/general/math"

describe("isSmoothRational", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the rational is smooth to the given smoothness", (): void => {
            const rational = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isSmoothRational(rational, 5 as 5 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not smooth to the given smoothness", (): void => {
            const rational = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isSmoothRational(rational, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns true if the rational is smooth to the given smoothness", (): void => {
            const rational = { quotient: [7, 5] as RationalQuotient }

            const actual = isSmoothRational(rational, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not smooth to the given smoothness", (): void => {
            const rational = { quotient: [7, 5] as RationalQuotient }

            const actual = isSmoothRational(rational, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the rational is smooth to the given smoothness", (): void => {
            const rational = { decimal: 14 as RationalDecimal }

            const actual = isSmoothRational(rational, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not smooth to the given smoothness", (): void => {
            const rational = { decimal: 14 as RationalDecimal }

            const actual = isSmoothRational(rational, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by direct rational decimal", (): void => {
        it("returns true if the rational is smooth to the given smoothness", (): void => {
            const rationalDecimal = 14 as RationalDecimal

            const actual = isSmoothRational(rationalDecimal, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the rational is not smooth to the given smoothness", (): void => {
            const rationalDecimal = 14 as RationalDecimal

            const actual = isSmoothRational(rationalDecimal, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeRationalSmoothness", (): void => {
    it("works for rationals with monzos", (): void => {
        const rational = { monzo: [0, 4, 1, -3, 0, 1] as RationalMonzo }

        const actual = computeRationalSmoothness(rational)

        const expected = 13 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for rationals with quotients", (): void => {
        const rational = { quotient: [7, 5] as RationalQuotient }

        const actual = computeRationalSmoothness(rational)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for rationals with decimals", (): void => {
        const rational: Rational = { decimal: 14 as RationalDecimal }

        const actual = computeRationalSmoothness(rational)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for direct rational decimals", (): void => {
        const rationalDecimal =  14 as RationalDecimal

        const actual = computeRationalSmoothness(rationalDecimal)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })
})
