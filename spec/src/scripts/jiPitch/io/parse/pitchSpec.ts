import {Io, Monzo, Quotient, Scamon} from "../../../../../../src/general"
import {IRRATIONAL_SCAMON_BASE_MONZO} from "../../../../../../src/general/math/irrational/scamon/constants"
import {parsePitch} from "../../../../../../src/scripts/jiPitch/io"

describe("parsePitch", (): void => {
    it("works when given as a monzo, returning a JI pitch", (): void => {
        const pitchText = "[0, 1, -2, 1⟩" as Io

        const actual = parsePitch(pitchText)

        const expected = {monzo: [0, 1, -2, 1]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works when given as a quotient, returning a JI pitch", (): void => {
        const pitchText = "7/2" as Io

        const actual = parsePitch(pitchText)

        const expected = {monzo: [-1, 0, 0, 1]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works when given as a comma name, returning a JI pitch", (): void => {
        const pitchText = "3A" as Io

        const actual = parsePitch(pitchText)

        const expected = {monzo: [-11, 7]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works when given as cents, returning a non-JI pitch", (): void => {
        const pitchText = "33.4c" as Io

        const actual = parsePitch(pitchText)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [0.027833, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when given as a rational decimal, returning a JI pitch", (): void => {
        const pitchText = "3.4" as Io

        const actual = parsePitch(pitchText)

        const expected = {monzo: [0, 0, -1, 0, 0, 0, 1]} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })

    it("works when given as a irrational (non-JI) decimal, returning a non-JI pitch", (): void => {
        const pitchText = "3.437838" as Io

        const actual = parsePitch(pitchText)

        const expected = {
            monzo: IRRATIONAL_SCAMON_BASE_MONZO,
            scaler: [1.781502, 1] as Quotient,
        } as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("works when given as an accidental", (): void => {
        const pitchText = ",'/|)<b" as Io

        const actual = parsePitch(pitchText)

        //   [ -25  12   1   0   0   1 ⟩   ,'/|)
        // + [  16  -8   0   0  -1     ⟩        <b
        // = [  -9   4   1   0  -1   1 ⟩   ,'/|)<b
        const expected = {monzo: [-9, 4, 1, 0, -1, 1]} as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("another accidental example (just trying to use all the chars that might be used in other formats, to prove it works at distinguishing accidentals)", (): void => {
        const pitchText = "`.!(>#"

        const actual = parsePitch(pitchText)

        // - [  -4   9  -2  -2     ⟩   ,'|(
        // + [ -16   8   0   0   1 ⟩       >#
        // = [ -12  -1   2   2   1 ⟩   `.!(>#
        const expected = {monzo: [-12, -1, 2, 2, 1]} as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("yet another accidental example", (): void => {
        const pitchText = "\\!~x"

        const actual = parsePitch(pitchText)

        // - [   1  -2  -1   0   0   0   0   0   1 ⟩    /|~
        // + [ -22  14                             ⟩       x
        // = [ -23  16   1   0   0   0   0   0  -1 ⟩    \!~x
        const expected = {monzo: [-23, 16, 1, 0, 0, 0, 0, 0, -1]} as Scamon<{rational: false}>
        expect(actual).toBeCloseToObject(expected)
    })

    it("can handle an empty monzo", (): void => {
        const pitchText = "[]"

        const actual = parsePitch(pitchText)

        const expected = {monzo: [] as unknown[] as Monzo<{rational: true}>} as Scamon<{rational: true}>
        expect(actual).toEqual(expected)
    })
})
