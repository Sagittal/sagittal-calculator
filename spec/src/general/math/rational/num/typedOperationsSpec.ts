import { divideRatios, multiplyRatios } from "../../../../../../src/general/math/rational/num"
import { RationalDecimal } from "../../../../../../src/general/math/rational/num/decimal"
import { RationalMonzo } from "../../../../../../src/general/math/rational/num/monzo"
import { RationalQuotient } from "../../../../../../src/general/math/rational/num/quotient"

describe("divideRatios", (): void => {
    describe("dividend is ratio", (): void => {
        const dividendRatio = {
            monzo: [0, 0, -1, 1] as RationalMonzo,
            quotient: [7, 5] as RationalQuotient,
            decimal: 1.4 as RationalDecimal,
        }
        const expected = {
            monzo: [2, -1, -1, 1] as RationalMonzo,
            quotient: [28, 15] as RationalQuotient,
            decimal: 1.866667 as RationalDecimal,
        }

        it("works for every property on the ratio, when divided by a monzo-based ratio", (): void => {
            const divisorRatio = { monzo: [-2, 1] as RationalMonzo }

            const actual = divideRatios(dividendRatio, divisorRatio)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the ratio, when divided by a monzo-based ratio", (): void => {
            const divisorRatio = { quotient: [3, 4] as RationalQuotient }

            const actual = divideRatios(dividendRatio, divisorRatio)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the ratio, when divided by a decimal-based ratio", (): void => {
            const divisorRatio = { decimal: 0.75 as RationalDecimal }

            const actual = divideRatios(dividendRatio, divisorRatio)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the ratio, when divided by a direct rational decimal", (): void => {
            const divisorRationalDecimal = 0.75 as RationalDecimal

            const actual = divideRatios(dividendRatio, divisorRationalDecimal)
            expect(actual).toBeCloseToObject(expected)
        })
    })

    describe("dividend is rational decimal", (): void => {
        const dividendRationalDecimal = 7.5 as RationalDecimal
        const expected = 3.75 as RationalDecimal

        it("works for a direct rational decimal divided by a monzo-based ratio", (): void => {
            const divisorRationalDecimal = { monzo: [1] as RationalMonzo }

            const actual = divideRatios(dividendRationalDecimal, divisorRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal divided by a quotient-based ratio", (): void => {
            const divisorRationalDecimal = { quotient: [2, 1] as RationalQuotient }

            const actual = divideRatios(dividendRationalDecimal, divisorRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal divided by a decimal-based ratio", (): void => {
            const divisorRationalDecimal = { decimal: 2 as RationalDecimal }

            const actual = divideRatios(dividendRationalDecimal, divisorRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal divided by a direct rational decimal", (): void => {
            const divisorRationalDecimal = 2 as RationalDecimal

            const actual = divideRatios(dividendRationalDecimal, divisorRationalDecimal)

            expect(actual).toEqual(expected)
        })
    })

    it("reduces to lowest terms", (): void => {
        const dividendRatio = { quotient: [7, 4] as RationalQuotient }
        const divisorRatio = { quotient: [3, 2] as RationalQuotient }

        const actual = divideRatios(dividendRatio, divisorRatio)

        const expected = { quotient: [7, 6] as RationalQuotient }
        expect(actual).toEqual(expected)
    })
})

describe("multiplyRatios", (): void => {
    describe("multiplicand is ratio", (): void => {
        const multiplicandRatio = {
            monzo: [2, -1, -1, 1] as RationalMonzo,
            quotient: [28, 15] as RationalQuotient,
            decimal: 1.866667 as RationalDecimal,
        }
        const expected = {
            monzo: [0, 0, -1, 1] as RationalMonzo,
            quotient: [7, 5] as RationalQuotient,
            decimal: 1.4 as RationalDecimal,
        }

        it("works for every property on the ratio, when multiplied by a monzo-based ratio", (): void => {
            const multiplierRatio = { monzo: [-2, 1] as RationalMonzo }

            const actual = multiplyRatios(multiplicandRatio, multiplierRatio)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the ratio, when multiplied by a monzo-based ratio", (): void => {
            const multiplierRatio = { quotient: [3, 4] as RationalQuotient }

            const actual = multiplyRatios(multiplicandRatio, multiplierRatio)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the ratio, when multiplied by a decimal-based ratio", (): void => {
            const multiplierRatio = { decimal: 0.75 as RationalDecimal }

            const actual = multiplyRatios(multiplicandRatio, multiplierRatio)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the ratio, when multiplied by a direct rational decimal", (): void => {
            const multiplierRationalDecimal = 0.75 as RationalDecimal

            const actual = multiplyRatios(multiplicandRatio, multiplierRationalDecimal)
            expect(actual).toBeCloseToObject(expected)
        })
    })

    describe("multiplicand is rational decimal", (): void => {
        const multiplicandRationalDecimal = 3.75 as RationalDecimal
        const expected = 7.5 as RationalDecimal

        it("works for a direct rational decimal multiplied by a monzo-based ratio", (): void => {
            const multiplierRationalDecimal = { monzo: [1] as RationalMonzo }

            const actual = multiplyRatios(multiplicandRationalDecimal, multiplierRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal multiplied by a quotient-based ratio", (): void => {
            const multiplierRationalDecimal = { quotient: [2, 1] as RationalQuotient }

            const actual = multiplyRatios(multiplicandRationalDecimal, multiplierRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal multiplied by a decimal-based ratio", (): void => {
            const multiplierRationalDecimal = { decimal: 2 as RationalDecimal }

            const actual = multiplyRatios(multiplicandRationalDecimal, multiplierRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal multiplied by a direct rational decimal", (): void => {
            const multiplierRationalDecimal = 2 as RationalDecimal

            const actual = multiplyRatios(multiplicandRationalDecimal, multiplierRationalDecimal)

            expect(actual).toEqual(expected)
        })
    })
})
