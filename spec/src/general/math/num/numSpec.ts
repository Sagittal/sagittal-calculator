import {
    computeNumFromDecimal,
    computeNumFromMonzo,
    computeNumFromQuotient,
    Decimal,
    Num,
    Quotient,
} from "../../../../../src/general/math/num"
import { Monzo } from "../../../../../src/general/math/num/monzo"
import { Integer } from "../../../../../src/general/math/rational"
import {
    IntegerMonzo,
    IntegerNum,
    IntegerQuotient, RationalDecimal,
    RationalNum,
    RationalQuotient,
} from "../../../../../src/general/math/rational/num"
import { RationalMonzo } from "../../../../../src/general/math/rational/num/monzo"

describe("computeNumFromMonzo", (): void => {
    it("creates a num from a monzo", (): void => {
        const monzo = [0, 0, -1.1, 1] as Monzo

        const actual = computeNumFromMonzo(monzo)

        const expected: Num = { monzo: [0, 0, -1.1, 1] as Monzo }
        expect(actual).toEqual(expected)
    })

    it("works for rational monzos", (): void => {
        const monzo = [0, 0, -1, 1] as RationalMonzo

        const actual = computeNumFromMonzo(monzo)

        const expected: RationalNum = { monzo: [0, 0, -1, 1] as RationalMonzo }
        expect(actual).toEqual(expected)
    })

    it("works for integer monzos", (): void => {
        const monzo = [0, 0, 1, 1] as IntegerMonzo

        const actual = computeNumFromMonzo(monzo)

        const expected: IntegerNum = { monzo: [0, 0, 1, 1] as IntegerMonzo }
        expect(actual).toEqual(expected)
    })
})

describe("computeNumFromQuotient", (): void => {
    it("creates a num from a quotient", (): void => {
        const quotient = [7.5, 5] as Quotient

        const actual = computeNumFromQuotient(quotient)

        const expected: Num = { quotient: [-1.1, 1] as Quotient }
        expect(actual).toEqual(expected)
    })

    it("works for rational quotients", (): void => {
        const quotient = [7, 5] as RationalQuotient

        const actual = computeNumFromQuotient(quotient)

        const expected: RationalNum = { quotient: [7, 5] as RationalQuotient }
        expect(actual).toEqual(expected)
    })

    it("works for integer quotients", (): void => {
        const quotient = [35, 1] as IntegerQuotient

        const actual = computeNumFromQuotient(quotient)

        const expected: IntegerNum = { quotient: [35, 1] as IntegerQuotient }
        expect(actual).toEqual(expected)
    })
})

describe("computeNumFromDecimal", (): void => {
    it("creates a num from a decimal", (): void => {
        const decimal = 7.534635 as Decimal
        
        const actual = computeNumFromDecimal(decimal)
        
        const expected: Num = { decimal: 7.534635 as Decimal }
        expect(actual).toEqual(expected)
    })

    it("works for rational decimals", (): void => {
        const decimal = 7.5 as RationalDecimal

        const actual = computeNumFromDecimal(decimal)
        
        const expected: RationalNum = { decimal: 7.5 as RationalDecimal }
        expect(actual).toEqual(expected)
    })

    it("works for integer decimals", (): void => {
        const decimal = 7 as Integer
        
        const actual = computeNumFromDecimal(decimal)
        
        const expected: IntegerNum = { decimal: 7.5 as Integer }
        expect(actual).toEqual(expected)
    })
})
