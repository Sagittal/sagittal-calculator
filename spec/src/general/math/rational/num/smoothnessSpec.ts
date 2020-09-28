import {
    computeRatioSmoothness,
    isSmoothRatio,
    Ratio,
    RationalDecimal,
    RationalMonzo,
    RationalQuotient,
    Smoothness,
} from "../../../../../../src/general/math"

describe("isSmoothRatio", (): void => {
    describe("by monzo", (): void => {
        it("returns true if the ratio is smooth to the given smoothness", (): void => {
            const ratio = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isSmoothRatio(ratio, 5 as 5 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is not smooth to the given smoothness", (): void => {
            const ratio = { monzo: [0, 0, 1] as RationalMonzo }

            const actual = isSmoothRatio(ratio, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by quotient", (): void => {
        it("returns true if the ratio is smooth to the given smoothness", (): void => {
            const ratio = { quotient: [7, 5] as RationalQuotient }

            const actual = isSmoothRatio(ratio, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is not smooth to the given smoothness", (): void => {
            const ratio = { quotient: [7, 5] as RationalQuotient }

            const actual = isSmoothRatio(ratio, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by decimal", (): void => {
        it("returns true if the ratio is smooth to the given smoothness", (): void => {
            const ratio = { decimal: 14 as RationalDecimal }

            const actual = isSmoothRatio(ratio, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is not smooth to the given smoothness", (): void => {
            const ratio = { decimal: 14 as RationalDecimal }

            const actual = isSmoothRatio(ratio, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })

    describe("by direct rational decimal", (): void => {
        it("returns true if the ratio is smooth to the given smoothness", (): void => {
            const rationalDecimal = 14 as RationalDecimal

            const actual = isSmoothRatio(rationalDecimal, 7 as 7 & Smoothness)

            expect(actual).toBeTruthy()
        })

        it("returns false if the ratio is not smooth to the given smoothness", (): void => {
            const rationalDecimal = 14 as RationalDecimal

            const actual = isSmoothRatio(rationalDecimal, 3 as 3 & Smoothness)

            expect(actual).toBeFalsy()
        })
    })
})

describe("computeRatioSmoothness", (): void => {
    it("works for ratios with monzos", (): void => {
        const ratio = { monzo: [0, 4, 1, -3, 0, 1] as RationalMonzo }

        const actual = computeRatioSmoothness(ratio)

        const expected = 13 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for ratios with quotients", (): void => {
        const ratio = { quotient: [7, 5] as RationalQuotient }

        const actual = computeRatioSmoothness(ratio)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for ratios with decimals", (): void => {
        const ratio: Ratio = { decimal: 14 as RationalDecimal }

        const actual = computeRatioSmoothness(ratio)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })

    it("works for direct rational decimals", (): void => {
        const rationalDecimal =  14 as RationalDecimal

        const actual = computeRatioSmoothness(rationalDecimal)

        const expected = 7 as Smoothness
        expect(actual).toBe(expected)
    })
})
