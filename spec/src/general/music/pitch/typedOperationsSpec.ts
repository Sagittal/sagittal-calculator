import { Max } from "../../../../../src/general/math"
import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../../src/general/music/irrational/constants"
import { computeStackedPitch, Interval, Pitch, sqrtPitch } from "../../../../../src/general/music/pitch"
import { computeInterval, maxPitches } from "../../../../../src/general/music/pitch/typedOperations"

describe("computeStackedPitch", (): void => {
    it("even if the pitches are both JI, this method returns a non-JI pitch", (): void => {
        const augendPitch = { monzo: [2, -1, -1, 1] } as Pitch<{ rational: true }>
        const addendPitch = { monzo: [-2, 1] } as Pitch<{ rational: true }>

        const actual = computeStackedPitch(augendPitch, addendPitch)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.485427, 1],
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("computeInterval", (): void => {
    it("works for two JI pitches, returning a non-JI interval", (): void => {
        const fromPitch = { monzo: [-1, 1] } as Pitch<{ rational: true }>
        const toPitch = { monzo: [-2, 0, 0, 1] } as Pitch<{ rational: true }>

        const actual = computeInterval(fromPitch, toPitch)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.222392, 1],
        } as Interval<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when the from pitch is non-JI", (): void => {
        const fromPitch = {
            monzo: [-2, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: [1, 3] as Quotient,
        } as Pitch<{ rational: false }>
        const toPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = computeInterval(fromPitch, toPitch)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [2.052810, 1] as Quotient,
        } as Interval<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when the to pitch is non-JI", (): void => {
        const fromPitch = { monzo: [-2, 0, 0, 1] } as Pitch<{ rational: true }>
        const toPitch = {
            monzo: [0, 0, 1] as Monzo<{ rational: true }>,
            scaler: [1, 3] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = computeInterval(fromPitch, toPitch)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [-0.033379, 1] as Quotient,
        } as Interval<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when both the from and to pitches are non-JI", (): void => {
        const fromPitch = {
            monzo: [-2, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: [1, 3] as Quotient,
        } as Pitch<{ rational: false }>
        const toPitch = {
            monzo: [0, 0, 1] as Monzo<{ rational: true }>,
            scaler: [1, 3] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = computeInterval(fromPitch, toPitch)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.504858, 1] as Quotient,
        } as Interval<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})

describe("sqrtPitch", (): void => {
    it("introduces a scaler (exponent) of 1/2 (root 2)", (): void => {
        const pitch = { monzo: [-11, 7] } as Pitch<{ rational: true }>

        const actual = sqrtPitch(pitch)

        const expected = {
            monzo: [-11, 7] as Monzo<{ rational: true }>,
            scaler: [1, 2] as Quotient,
        }
        expect(actual).toEqual(expected)
    })
})

describe("maxPitches", (): void => {
    it("works for a mix of JI and non-JI pitches", (): void => {
        const pitchA = { monzo: [-2, -1, 0, 0, 1] } as Pitch<{ rational: true }>   // 11/12
        const pitchB = {
            monzo: [1] as Monzo<{ rational: true }>,
            scaler: [3, 1] as Quotient,
        } as Pitch<{ rational: false }>                                            // 8
        const pitchC = { monzo: [0, 1] } as Pitch<{ rational: true }>              // 7

        const actual = maxPitches(pitchA, pitchB, pitchC)

        expect(actual).toEqual(pitchB as Pitch as Max<Pitch>)
    })
})
