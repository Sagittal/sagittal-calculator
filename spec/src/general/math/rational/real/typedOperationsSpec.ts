import { divideRationals, multiplyRationals } from "../../../../../../src/general/math/rational/real"
import { RationalDecimal } from "../../../../../../src/general/math/rational/real/decimal"
import { RationalMonzo } from "../../../../../../src/general/math/rational/real/monzo"
import { RationalQuotient } from "../../../../../../src/general/math/rational/real/quotient"

describe("divideRationals", (): void => {
    describe("dividend is rational", (): void => {
        const dividendRational = {
            monzo: [0, 0, -1, 1] as RationalMonzo,
            quotient: [7, 5] as RationalQuotient,
            decimal: 1.4 as RationalDecimal,
        }
        const expected = {
            monzo: [2, -1, -1, 1] as RationalMonzo,
            quotient: [28, 15] as RationalQuotient,
            decimal: 1.866667 as RationalDecimal,
        }

        it("works for every property on the rational, when divided by a monzo-based rational", (): void => {
            const divisorRational = { monzo: [-2, 1] as RationalMonzo }

            const actual = divideRationals(dividendRational, divisorRational)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the rational, when divided by a monzo-based rational", (): void => {
            const divisorRational = { quotient: [3, 4] as RationalQuotient }

            const actual = divideRationals(dividendRational, divisorRational)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the rational, when divided by a decimal-based rational", (): void => {
            const divisorRational = { decimal: 0.75 as RationalDecimal }

            const actual = divideRationals(dividendRational, divisorRational)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the rational, when divided by a direct rational decimal", (): void => {
            const divisorRationalDecimal = 0.75 as RationalDecimal

            const actual = divideRationals(dividendRational, divisorRationalDecimal)
            expect(actual).toBeCloseToObject(expected)
        })
    })

    describe("dividend is rational decimal", (): void => {
        const dividendRationalDecimal = 7.5 as RationalDecimal
        const expected = 3.75 as RationalDecimal

        it("works for a direct rational decimal divided by a monzo-based rational", (): void => {
            const divisorRationalDecimal = { monzo: [1] as RationalMonzo }

            const actual = divideRationals(dividendRationalDecimal, divisorRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal divided by a quotient-based rational", (): void => {
            const divisorRationalDecimal = { quotient: [2, 1] as RationalQuotient }

            const actual = divideRationals(dividendRationalDecimal, divisorRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal divided by a decimal-based rational", (): void => {
            const divisorRationalDecimal = { decimal: 2 as RationalDecimal }

            const actual = divideRationals(dividendRationalDecimal, divisorRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal divided by a direct rational decimal", (): void => {
            const divisorRationalDecimal = 2 as RationalDecimal

            const actual = divideRationals(dividendRationalDecimal, divisorRationalDecimal)

            expect(actual).toEqual(expected)
        })
    })

    it("reduces to lowest terms", (): void => {
        const dividendRational = { quotient: [7, 4] as RationalQuotient }
        const divisorRational = { quotient: [3, 2] as RationalQuotient }

        const actual = divideRationals(dividendRational, divisorRational)

        const expected = { quotient: [7, 6] as RationalQuotient }
        expect(actual).toEqual(expected)
    })
})

describe("multiplyRationals", (): void => {
    describe("multiplicand is rational", (): void => {
        const multiplicandRational = {
            monzo: [2, -1, -1, 1] as RationalMonzo,
            quotient: [28, 15] as RationalQuotient,
            decimal: 1.866667 as RationalDecimal,
        }
        const expected = {
            monzo: [0, 0, -1, 1] as RationalMonzo,
            quotient: [7, 5] as RationalQuotient,
            decimal: 1.4 as RationalDecimal,
        }

        it("works for every property on the rational, when multiplied by a monzo-based rational", (): void => {
            const multiplierRational = { monzo: [-2, 1] as RationalMonzo }

            const actual = multiplyRationals(multiplicandRational, multiplierRational)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the rational, when multiplied by a monzo-based rational", (): void => {
            const multiplierRational = { quotient: [3, 4] as RationalQuotient }

            const actual = multiplyRationals(multiplicandRational, multiplierRational)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the rational, when multiplied by a decimal-based rational", (): void => {
            const multiplierRational = { decimal: 0.75 as RationalDecimal }

            const actual = multiplyRationals(multiplicandRational, multiplierRational)
            expect(actual).toBeCloseToObject(expected)
        })

        it("works for every property on the rational, when multiplied by a direct rational decimal", (): void => {
            const multiplierRationalDecimal = 0.75 as RationalDecimal

            const actual = multiplyRationals(multiplicandRational, multiplierRationalDecimal)
            expect(actual).toBeCloseToObject(expected)
        })
    })

    describe("multiplicand is rational decimal", (): void => {
        const multiplicandRationalDecimal = 3.75 as RationalDecimal
        const expected = 7.5 as RationalDecimal

        it("works for a direct rational decimal multiplied by a monzo-based rational", (): void => {
            const multiplierRationalDecimal = { monzo: [1] as RationalMonzo }

            const actual = multiplyRationals(multiplicandRationalDecimal, multiplierRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal multiplied by a quotient-based rational", (): void => {
            const multiplierRationalDecimal = { quotient: [2, 1] as RationalQuotient }

            const actual = multiplyRationals(multiplicandRationalDecimal, multiplierRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal multiplied by a decimal-based rational", (): void => {
            const multiplierRationalDecimal = { decimal: 2 as RationalDecimal }

            const actual = multiplyRationals(multiplicandRationalDecimal, multiplierRationalDecimal)

            expect(actual).toEqual(expected)
        })

        it("works for a direct rational decimal multiplied by a direct rational decimal", (): void => {
            const multiplierRationalDecimal = 2 as RationalDecimal

            const actual = multiplyRationals(multiplicandRationalDecimal, multiplierRationalDecimal)

            expect(actual).toEqual(expected)
        })
    })
})
