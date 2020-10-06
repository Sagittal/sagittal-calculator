import { Monzo } from "../../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { Pitch } from "../../../../../src/general/music/pitch"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../../src/general/music/pitch/constants"
import { computeInterval } from "../../../../../src/general/music/pitch/interval"

describe("computeInterval", (): void => {
    it("works for two JI pitches, subtracting the from's monzo from the to's monzo", (): void => {
        const fromPitch = { monzo: [-1, 1] } as Pitch<{ rational: true }>
        const toPitch = { monzo: [-2, 0, 0, 1] } as Pitch<{ rational: true }>

        const actual = computeInterval(fromPitch, toPitch)

        const expected = { monzo: [-1, -1, 0, 1] } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("if the from pitch is non-JI, the result is non-JI", (): void => {
        const fromPitch = {
            monzo: [-2, 0, 0, 1] as Monzo<{ rational: true }>,
            scaler: [1, 3] as Quotient,
        } as Pitch<{ rational: false }>
        const toPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = computeInterval(fromPitch, toPitch)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [2.052810, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("if the to pitch is non-JI, the result is non-JI", (): void => {
        const fromPitch = { monzo: [-2, 0, 0, 1] } as Pitch<{ rational: true }>
        const toPitch = {
            monzo: [0, 0, 1] as Monzo<{ rational: true }>,
            scaler: [1, 3] as Quotient,
        } as Pitch<{ rational: false }>

        const actual = computeInterval(fromPitch, toPitch)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [-0.033379, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("if both the from and to pitches are non-JI, the result is non-JI", (): void => {
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
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
