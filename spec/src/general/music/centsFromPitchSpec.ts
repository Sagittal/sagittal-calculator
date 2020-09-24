import { computeCentsFromPitch, Monzo, Ratio } from "../../../../src/general"
import { Cents } from "../../../../src/general/music"

describe("computeCentsFromPitch", (): void => {
    it("returns the cents of a pitch with a monzo", (): void => {
        const pitch = { monzo: [-1, 2, 0, -2, 1] as Monzo }

        const actual = computeCentsFromPitch(pitch)

        const expected = 17.576131 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos with really big 2 exponents", (): void => {
        const pitch = { cents: 4.499913 as Cents, monzo: [158.5, -100] as Monzo<{ potentiallyIrrational: true }> }

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

    it("another example, negative", (): void => {
        const pitch = { monzo: [2, 1, 0, 0, 0, -1] as Monzo } // 12/13

        const actual = computeCentsFromPitch(pitch)

        const expected = -138.572661 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("gives the cents value of a ratio", (): void => {
        const pitch = { ratio: [3, 2] as Ratio }

        const actual = computeCentsFromPitch(pitch)

        const expected = 701.955001 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
