import { computeCentsFromPitch, Monzo } from "../../../../src/general"
import { Cents } from "../../../../src/general/music"

describe("computeCentsFromPitch", (): void => {
    it("returns the cents of a pitch with a monzo", (): void => {
        const pitch = { monzo: [-1, 2, 0, -2, 1] as Monzo }

        const actual = computeCentsFromPitch(pitch)

        const expected = 17.576131 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos with really big 2 exponents", (): void => {
        const pitch = { cents: 4.499913 as Cents, monzo: [158.5, -100] as Monzo<{ irrational: true }> }

        const actual = computeCentsFromPitch(pitch)

        const expected = 4.499913 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos that are greater than an octave", (): void => {
        const pitch = { monzo: [0, 1] as Monzo }

        const actual = computeCentsFromPitch(pitch)

        const expected = 1901.955 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
