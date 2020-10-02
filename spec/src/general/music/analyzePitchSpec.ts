import { RationalDecimal } from "../../../../src/general/math/rational/real/decimal"
import { RationalMonzo } from "../../../../src/general/math/rational/real/monzo"
import { RationalQuotient } from "../../../../src/general/math/rational/real/quotient"
import { RealDecimal } from "../../../../src/general/math/real/decimal"
import { RealMonzo } from "../../../../src/general/math/real/monzo"
import { RealQuotient } from "../../../../src/general/math/real/quotient"
import { Cents } from "../../../../src/general/music"
import { analyzePitch } from "../../../../src/general/music/analyzePitch"

describe("analyzePitch", (): void => {
    it("given a pitch with a monzo, returns all representations of it (you can find quotient from monzo)", (): void => {
        const pitch = { monzo: [-4, -1, 0, 2.5] as RealMonzo }

        const actual = analyzePitch(pitch)

        const expected = {
            monzo: [-4, -1, 0, 2.5] as RealMonzo,
            quotient: [129.641814, 48] as RealQuotient,
            decimal: 2.700871 as RealDecimal,
            cents: 1720.109765 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("given a pitch with a quotient, adds cents and decimal (can't find monzo from quotient)", (): void => {
        const pitch = { quotient: [8.888889, 1.3] as RealQuotient }

        const actual = analyzePitch(pitch)

        const expected = {
            quotient: [8.888889, 1.3] as RealQuotient,
            decimal: 6.837607 as RealDecimal,
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
        const pitch = { decimal: 1.595814 as RealDecimal }

        const actual = analyzePitch(pitch)

        const expected = {
            decimal: 1.595814 as RealDecimal,
            cents: 809.151010 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("given a pitch as a direct decimal, creates a real and includes the cents", (): void => {
        const pitch = 1.595814 as RealDecimal

        const actual = analyzePitch(pitch)

        const expected = {
            decimal: 1.595814 as RealDecimal,
            cents: 809.151010 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })

    it("doesn't bother getting quotients perfectly accurate for huge monzos", (): void => {
        const pitch = { monzo: [ 158.5, -100 ] as RealMonzo }

        const actual = analyzePitch(pitch)

        const expected = {
            monzo: [ 158.5, -100 ] as RealMonzo,
            quotient: [5.167188592359618e+47, 5.153775207320113e+47] as RealQuotient,
            decimal: 1.002603 as RealDecimal,
            cents: 4.499913 as Cents,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
