import { Decimal } from "../../../../../src/general/math/numeric/decimal"
import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { Cents, computePitchFromCents, computePitchFromQuotient } from "../../../../../src/general/music"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../../src/general/music/irrational/constants"
import { computePitchFromDecimal, computePitchFromMonzo, Pitch } from "../../../../../src/general/music/pitch"

describe("computePitchFromDecimal", (): void => {
    it("when given a rational decimal, returns a JI pitch", (): void => {
        const rationalDecimal = 84 as Decimal<{ rational: true }>

        const actual = computePitchFromDecimal(rationalDecimal)

        const expected = {
            monzo: [2, 1, 0, 1] as Monzo<{ rational: true }>,
        } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational decimal, returns a pitch which includes it as a power of 2, with the base 2 as the monzo and exponent as the scaler quotient (the log over 1)", (): void => {
        const decimal = 84.458901 as Decimal<{ rational: false }>

        const actual = computePitchFromDecimal(decimal)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a decimal which is not identified as rational or irrational, but can be construed as rational, returns a JI pitch", (): void => {
        const decimal = 15.94323 as Decimal

        const actual = computePitchFromDecimal(decimal)

        const expected = {
            monzo: [-5, 13, -5],
        } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})

describe("computePitchFromMonzo", (): void => {
    it("when given a rational monzo, returns a JI pitch with that monzo as its monzo", (): void => {
        const monzo = [0, 0, -2, 2] as Monzo<{ rational: true }>

        const actual = computePitchFromMonzo(monzo)

        const expected = { monzo } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational monzo, returns a non-JI pitch", (): void => {
        const monzo = [-5.5, 3.5] as Monzo<{ rational: false }>

        const actual = computePitchFromMonzo(monzo)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.047369, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("computePitchFromCents", (): void => {
    it("when given a cents value that is almost certainly a JI pitch, still doesn't presume to return one                ", (): void => {
        const cents = 701.955000865 as Cents

        const actual = computePitchFromCents(cents)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.584963, 1],
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("when given a cents value that does not correspond to a JI pitch, doesn't try to guess a rational quotient (i.e. in this case it might try to guess ", (): void => {
        const cents = 600 as Cents

        const actual = computePitchFromCents(cents)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.5, 1],
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("computePitchFromQuotient", (): void => {
    it("when given a rational quotient, returns a JI pitch", (): void => {
        const quotient = [4, 3] as Quotient<{ rational: true }>

        const actual = computePitchFromQuotient(quotient)

        const expected = { monzo: [2, -1] } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("when given an irrational quotient, returns a non-JI pitch", (): void => {
        const quotient = [4.346, 3.23211] as Quotient<{ rational: false }>

        const actual = computePitchFromQuotient(quotient)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.427212, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
