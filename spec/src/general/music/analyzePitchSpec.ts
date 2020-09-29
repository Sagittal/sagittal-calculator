import { Decimal } from "../../../../src/general/math/num/decimal"
import { Monzo } from "../../../../src/general/math/num/monzo"
import { Quotient } from "../../../../src/general/math/num/quotient"
import { RationalDecimal } from "../../../../src/general/math/rational/num/decimal"
import { RationalMonzo } from "../../../../src/general/math/rational/num/monzo"
import { RationalQuotient } from "../../../../src/general/math/rational/num/quotient"
import { Cents } from "../../../../src/general/music"
import { analyzePitch } from "../../../../src/general/music/analyzePitch"

describe("analyzePitch", (): void => {
    it("given a pitch with a monzo, returns all representations of it (you can find quotient from monzo)", (): void => {
        const pitch = { monzo: [-4, -1, 0, 2.5] as Monzo }

        const actual = analyzePitch(pitch)

        const expected = {
            monzo: [-4, -1, 0, 2.5] as Monzo,
            quotient: [129.641814, 48] as Quotient,
            decimal: 2.700871 as Decimal,
            cents: 1720.109765 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("given a pitch with a quotient, adds cents and decimal (can't find monzo from quotient)", (): void => {
        const pitch = { quotient: [8.888889, 1.3] as Quotient }

        const actual = analyzePitch(pitch)

        const expected = {
            quotient: [8.888889, 1.3] as Quotient,
            decimal: 6.837607 as Decimal,
            cents: 3328.189786 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("given a pitch with a rational quotient, returns all representations of it (can find monzo from rational quotient)", (): void => {
        const pitch = { quotient: [8, 13] as RationalQuotient }

        const actual = analyzePitch(pitch)

        const expected = {
            quotient: [8, 13] as RationalQuotient,
            monzo: [3, 0, 0, 0, 0, -1] as RationalMonzo,
            decimal: 0.615385 as RationalDecimal,
            cents: -840.527662 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("given a pitch with a decimal, merely adds the cents", (): void => {
        const pitch = { decimal: 1.595814 as Decimal }

        const actual = analyzePitch(pitch)

        const expected = {
            decimal: 1.595814 as Decimal,
            cents: 809.151010 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("given a pitch as a direct decimal, creates a num and includes the cents", (): void => {
        const pitch = 1.595814 as Decimal

        const actual = analyzePitch(pitch)

        const expected = {
            decimal: 1.595814 as Decimal,
            cents: 809.151010 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("doesn't bother getting quotients perfectly accurate for huge monzos", (): void => {
        const pitch = { monzo: [ 158.5, -100 ] as Monzo }

        const actual = analyzePitch(pitch)

        const expected = {
            monzo: [ 158.5, -100 ] as Monzo,
            quotient: [5.167188592359618e+47, 5.153775207320113e+47] as Quotient,
            decimal: 1.002603 as Decimal,
            cents: 4.499913 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
