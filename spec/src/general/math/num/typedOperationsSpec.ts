import { computeNumSqrt, divideNums } from "../../../../../src/general/math/num"
import { Decimal } from "../../../../../src/general/math/num/decimal"
import { Monzo } from "../../../../../src/general/math/num/monzo"
import { Quotient } from "../../../../../src/general/math/num/quotient"
import { maxNums } from "../../../../../src/general/math/num/typedOperations"
import { RationalQuotient } from "../../../../../src/general/math/rational/num/quotient"

describe("divideNums", (): void => {
    it("works for a monzo-based num by a monzo-based num", (): void => {
        const numA = { monzo: [0, 0, 1] as Monzo }
        const numB = { monzo: [-2, 0, 0, 1] as Monzo }

        const actual = divideNums(numA, numB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based num by a quotient-based num", (): void => {
        const numA = { monzo: [0, 0, 1] as Monzo }
        const numB = { quotient: [7, 4] as Quotient }

        const actual = divideNums(numA, numB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based num by a decimal-based num", (): void => {
        const numA = { monzo: [0, 0, 1] as Monzo }
        const numB = { decimal: 1.75 as Decimal }

        const actual = divideNums(numA, numB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })

    it("works for a monzo-based num by a direct decimal", (): void => {
        const numA = { monzo: [0, 0, 1] as Monzo }
        const decimalB = 1.75 as Decimal

        const actual = divideNums(numA, decimalB)

        const expected = 5 / (7 / 4)
        expect(actual).toEqual(expected)
    })
})

describe("computeNumSqrt", (): void => {
    it("includes all representations for nums", (): void => {
        const num = {
            monzo: [-11, 7] as Monzo,
            quotient: [3, 2] as Quotient,
            decimal: 1.5 as Decimal,
        }

        const actual = computeNumSqrt(num)

        const expected = {
            monzo: [-5.5, 3.5] as Monzo,
            quotient: [Math.sqrt(3), Math.sqrt(2)] as Quotient,
            decimal: Math.sqrt(1.5) as Decimal,
        }
        expect(actual).toEqual(expected)
    })

    it("works for a direct decimal", (): void => {
        const decimal = 1.5

        const actual = computeNumSqrt(decimal)

        const expected = Math.sqrt(1.5)
        expect(actual).toBeCloseTo(expected)
    })
})

// TODO: Sheesh... in retrospect, might it have been simpler to just represent everything as a monzo?
//  Any quotient could be expressed as a monzo
//  Any decimal could be expressed as a power of 2, simply occupying the first term of the monzo...
//  And then any EDO degree could be expressed with some power of 2, too.
//  You'd have nested monzos: const pitch = [ [ -2, -1 ] ] and that'd be 1 step of 12tet
describe("maxNums", (): void => {
    it("works for a hodge-podge of num representations", (): void => {
        const numA = 5.5
        const numB = { quotient: [ 13, 8 ] as RationalQuotient }
        const numC = { monzo: [ -2, -1.1, 0, 0, 1 ] as Monzo }
        const numD = { decimal: 4.444 as Decimal }
        
        const actaul = maxNums(numA, numB, numC, numD)
        
        expect(actaul).toEqual(numA)
    })
})
