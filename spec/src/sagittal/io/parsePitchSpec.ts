import { Io } from "../../../../src/general/io"
import { Monzo } from "../../../../src/general/math/numeric/monzo"
import { Quotient } from "../../../../src/general/math/numeric/quotient"
import { Pitch } from "../../../../src/general/music/pitch"
import { NON_JI_PITCH_BASE_MONZO } from "../../../../src/general/music/pitch/constants"
import { parsePitch } from "../../../../src/sagittal/io"

describe("parsePitch", (): void => {
    it("works when given as a monzo, returning a JI pitch", (): void => {
        const pitchText = "[0, 1, -2, 1⟩" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [0, 1, -2, 1] } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works when given as a quotient, returning a JI pitch", (): void => {
        const pitchText = "7/2" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [-1, 0, 0, 1] } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works when given as a comma name, returning a JI pitch", (): void => {
        const pitchText = "3A" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [-11, 7] } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works when given as cents, returning a non-JI pitch", (): void => {
        const pitchText = "33.4c" as Io

        const actual = parsePitch(pitchText)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [0.027833, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when given as a rational decimal, returning a JI pitch", (): void => {
        const pitchText = "3.4" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [0, 0, -1, 0, 0, 0, 1] } as Pitch<{ rational: true }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when given as a irrational (non-JI) decimal, returning a non-JI pitch", (): void => {
        const pitchText = "3.437838" as Io

        const actual = parsePitch(pitchText)

        const expected = {
            monzo: NON_JI_PITCH_BASE_MONZO,
            scaler: [1.781502, 1] as Quotient,
        } as Pitch<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
