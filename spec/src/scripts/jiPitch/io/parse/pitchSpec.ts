import {Io} from "../../../../../../src/general/io"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../../src/general/math/irrational/scamon/constants"
import {Quotient} from "../../../../../../src/general/math/numeric/quotient"
import {Scamon} from "../../../../../../src/general/math/numeric/scamon"
import {parsePitch} from "../../../../../../src/scripts/jiPitch/io/parse"

describe("parsePitch", (): void => {
    it("works when given as a monzo, returning a JI pitch", (): void => {
        const pitchText = "[0, 1, -2, 1⟩" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [0, 1, -2, 1] } as Scamon<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works when given as a quotient, returning a JI pitch", (): void => {
        const pitchText = "7/2" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [-1, 0, 0, 1] } as Scamon<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works when given as a comma name, returning a JI pitch", (): void => {
        const pitchText = "3A" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [-11, 7] } as Scamon<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works when given as cents, returning a non-JI pitch", (): void => {
        const pitchText = "33.4c" as Io

        const actual = parsePitch(pitchText)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.027833, 1] as Quotient,
        } as Scamon<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when given as a rational decimal, returning a JI pitch", (): void => {
        const pitchText = "3.4" as Io

        const actual = parsePitch(pitchText)

        const expected = { monzo: [0, 0, -1, 0, 0, 0, 1] } as Scamon<{ rational: true }>
        expect(actual).toEqual(expected)
    })

    it("works when given as a irrational (non-JI) decimal, returning a non-JI pitch", (): void => {
        const pitchText = "3.437838" as Io

        const actual = parsePitch(pitchText)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [1.781502, 1] as Quotient,
        } as Scamon<{ rational: false }>
        expect(actual).toBeCloseToObject(expected)
    })
})
