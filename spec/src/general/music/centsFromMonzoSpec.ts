import { computeCentsFromJiPitch, Monzo } from "../../../../src/general"
import { Cents } from "../../../../src/general/music"

describe("computeCentsFromJiPitch", () => {
    it("returns the cents of a monzo", () => {
        const monzo = [-1, 2, 0, -2, 1] as Monzo

        const actual = computeCentsFromJiPitch({ monzo })

        const expected = 17.576131157281500 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    // TODO: bring back once this supports non-JI pitches
    // it("works for monzos with really big 2 exponents", () => {
    //     const monzo = [158.5, -100] as Monzo<{ irrational: true }>
    //
    //     const actual = computeCentsFromJiPitch({ monzo })
    //
    //     const expected = 4.49991346125848 as Cents
    //     expect(actual).toBeCloseToTyped(expected)
    // })

    it("works for monzos that are greater than an octave", () => {
        const monzo = [0, 1] as Monzo

        const actual = computeCentsFromJiPitch({ monzo })

        const expected = 1901.955 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
