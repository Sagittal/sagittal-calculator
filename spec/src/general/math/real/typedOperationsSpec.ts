import { RationalQuotient } from "../../../../../src/general/math/rational/real/quotient"
import { computeRealSqrt, divideReals } from "../../../../../src/general/math/real"
import { RealDecimal } from "../../../../../src/general/math/real/decimal"
import { Monzo } from "../../../../../src/general/math/real/monzo"
import { Quotient } from "../../../../../src/general/math/real/quotient"
import { maxReals } from "../../../../../src/general/math/real/typedOperations"

describe("divideReals", (): void => {
    it("works for a monzo-based real by a monzo-based real", (): void => {
        const realA = { monzo: [0, 0, 1] as Monzo }
        const realB = { monzo: [-2, 0, 0, 1] as Monzo }

        const actual = divideReals(realA, realB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based real by a quotient-based real", (): void => {
        const realA = { monzo: [0, 0, 1] as Monzo }
        const realB = { quotient: [7, 4] as Quotient }

        const actual = divideReals(realA, realB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based real by a decimal-based real", (): void => {
        const realA = { monzo: [0, 0, 1] as Monzo }
        const realB = { decimal: 1.75 as RealDecimal }

        const actual = divideReals(realA, realB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based real by a direct decimal", (): void => {
        const realA = { monzo: [0, 0, 1] as Monzo }
        const decimalB = 1.75 as RealDecimal

        const actual = divideReals(realA, decimalB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })
})

describe("computeRealSqrt", (): void => {
    it("includes all representations for reals", (): void => {
        const real = {
            monzo: [-11, 7] as Monzo,
            quotient: [3, 2] as Quotient,
            decimal: 1.5 as RealDecimal,
        }

        const actual = computeRealSqrt(real)

        const expected = {
            monzo: [-5.5, 3.5] as Monzo,
            quotient: [Math.sqrt(3), Math.sqrt(2)] as Quotient,
            decimal: Math.sqrt(1.5) as RealDecimal,
        }
        expect(actual).toEqual(expected)
    })

    it("works for a direct decimal", (): void => {
        const decimal = 1.5

        const actual = computeRealSqrt(decimal)

        const expected = Math.sqrt(1.5)
        expect(actual).toBeCloseTo(expected)
    })
})

describe("maxReals", (): void => {
    it("works for a hodge-podge of real representations", (): void => {
        const realA = 5.5
        const realB = { quotient: [ 13, 8 ] as RationalQuotient }
        const realC = { monzo: [ -2, -1.1, 0, 0, 1 ] as Monzo }
        const realD = { decimal: 4.444 as RealDecimal }
        
        const actaul = maxReals(realA, realB, realC, realD)
        
        expect(actaul).toEqual(realA)
    })
})
