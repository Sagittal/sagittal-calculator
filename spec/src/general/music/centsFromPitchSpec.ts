import { computeCentsFromPitch, Monzo } from "../../../../src/general"
import { Cents } from "../../../../src/general/music"

describe("computeCentsFromPitch", () => {
    it("returns the cents of a pitch with a monzo", () => {
        const pitch = { monzo: [-1, 2, 0, -2, 1] as Monzo }

        const actual = computeCentsFromPitch(pitch)

        const expected = 17.576131157281500 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos with really big 2 exponents", () => {
        const pitch = { cents: 4.49991346125848 as Cents, monzo: [158.5, -100] as Monzo<{ irrational: true }> }

        const actual = computeCentsFromPitch(pitch)

        const expected = 4.49991346125848 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos that are greater than an octave", () => {
        const pitch = { monzo: [0, 1] as Monzo }

        const actual = computeCentsFromPitch(pitch)

        const expected = 1901.955 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})