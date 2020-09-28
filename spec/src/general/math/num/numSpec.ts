import {
    computeNumFromDecimal,
    computeNumFromMonzo,
    computeNumFromQuotient,
    Decimal,
    Num,
    Quotient,
} from "../../../../../src/general/math/num"
import { Monzo } from "../../../../../src/general/math/num/monzo"
import { IntegerDecimal } from "../../../../../src/general/math/rational"
import {
    Integer,
    IntegerMonzo,
    IntegerQuotient,
    Ratio,
    RationalDecimal,
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
        const rationalMonzo = [0, 0, -1, 1] as RationalMonzo

        const actual = computeNumFromMonzo(rationalMonzo)

        const expected: Ratio = { monzo: [0, 0, -1, 1] as RationalMonzo }
        expect(actual).toEqual(expected)
    })

    it("works for integer monzos", (): void => {
        const integerMonzo = [0, 0, 1, 1] as IntegerMonzo

        const actual = computeNumFromMonzo(integerMonzo)

        const expected: Integer = { monzo: [0, 0, 1, 1] as IntegerMonzo }
        expect(actual).toEqual(expected)
    })
})

describe("computeNumFromQuotient", (): void => {
    it("creates a num from a quotient", (): void => {
        const quotient = [7.5, 5] as Quotient

        const actual = computeNumFromQuotient(quotient)

        const expected: Num = { quotient: [7.5, 5] as Quotient }
        expect(actual).toEqual(expected)
    })

    it("works for rational quotients", (): void => {
        const rationalQuotient = [7, 5] as RationalQuotient

        const actual = computeNumFromQuotient(rationalQuotient)

        const expected: Ratio = { quotient: [7, 5] as RationalQuotient }
        expect(actual).toEqual(expected)
    })

    it("works for integer quotients", (): void => {
        const integerQuotient = [35, 1] as IntegerQuotient

        const actual = computeNumFromQuotient(integerQuotient)

        const expected: Integer = { quotient: [35, 1] as IntegerQuotient }
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
        const rationalDecimal = 7.5 as RationalDecimal

        const actual = computeNumFromDecimal(rationalDecimal)

        const expected: Ratio = { decimal: 7.5 as RationalDecimal }
        expect(actual).toEqual(expected)
    })

    it("works for integer decimals", (): void => {
        const integerDecimal = 7 as IntegerDecimal

        const actual = computeNumFromDecimal(integerDecimal)

        const expected: Integer = { decimal: 7 as IntegerDecimal }
        expect(actual).toEqual(expected)
    })
})
