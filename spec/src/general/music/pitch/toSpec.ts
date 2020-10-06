import {
    computeDecimalFromPitch,
    computeMonzoFromPitch,
    computeQuotientFromPitch,
    Decimal,
    Monzo,
    Pitch,
    Quotient,
} from "../../../../../src/general"
import { Cents, computeCentsFromPitch } from "../../../../../src/general/music"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../../src/general/music/pitch/constants"

describe("computeCentsFromPitch", (): void => {
    it("returns the cents of a pitch with a monzo", (): void => {
        const pitch = { monzo: [-1, 2, 0, -2, 1] } as Pitch<{ rational: true }>

        const actual = computeCentsFromPitch(pitch)

        const expected = 17.576131 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos with really big 2 exponents", (): void => {
        const pitch = { monzo: [317, -200] } as Pitch<{ rational: true }>

        const actual = computeCentsFromPitch(pitch)

        const expected = 8.999826 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos that are greater than an octave", (): void => {
        const pitch = { monzo: [0, 1] } as Pitch<{ rational: true }>

        const actual = computeCentsFromPitch(pitch)

        const expected = 1901.955 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("another example, negative", (): void => {
        const pitch = { monzo: [2, 1, 0, 0, 0, -1] } as Pitch<{ rational: true }>

        const actual = computeCentsFromPitch(pitch)

        const expected = -138.572661 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})

describe("computeMonzoFromPitch", (): void => {
    it("works for a JI pitch", (): void => {
        const pitch = { monzo: [-1, 0, -1, 0, 1] } as Pitch<{ rational: true }>

        const actual = computeMonzoFromPitch(pitch)

        const expected = [-1, 0, -1, 0, 1] as Monzo<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works for a non-JI pitch", (): void => {
        const pitch = { monzo: [-1, 0, -1, 0, 1], scaler: [1, 3] as Quotient } as Pitch<{ rational: false }>

        const actual = computeMonzoFromPitch(pitch)

        const expected = [-1 / 3, 0, -1 / 3, 0, 1 / 3] as Monzo<{ rational: false }>
        expect(actual).toEqual(expected)
    })
})

describe("computeDecimalFromPitch", (): void => {
    it("given a JI pitch, returns a rational decimal", (): void => {
        const pitch = { monzo: [-4, 4, -1] } as Pitch<{ rational: true }>

        const actual = computeDecimalFromPitch(pitch)

        const expected = 81 / 80 as Decimal<{ rational: true }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("given a non-JI pitch, returns an irrational decimal", (): void => {
        const pitch = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = computeDecimalFromPitch(pitch)

        const expected = 84.45893 as Decimal<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("computeQuotientFromPitch", (): void => {
    it("given a JI pitch, returns a rational quotient", (): void => {
        const pitch = { monzo: [-4, 4, -1] } as Pitch<{ rational: true }>

        const actual = computeQuotientFromPitch(pitch)

        const expected = [81, 80] as Quotient<{ rational: true }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("given a non-JI pitch, returns an dumb irrational quotient, essentially the same irrational decimal you would have gotten, but over 1", (): void => {
        const pitch = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [6.400178, 1] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = computeQuotientFromPitch(pitch)

        const expected = [84.45893, 1] as Quotient<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
