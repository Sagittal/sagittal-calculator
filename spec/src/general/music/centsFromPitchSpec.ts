import { RationalMonzo, RationalQuotient, Real } from "../../../../src/general"
import { Cents, computeCentsFromPitch } from "../../../../src/general/music"

describe("computeCentsFromPitch", (): void => {
    it("returns the cents of a pitch with a monzo", (): void => {
        const pitch: Real = { monzo: [-1, 2, 0, -2, 1] as RationalMonzo }

        const actual = computeCentsFromPitch(pitch)

        const expected = 17.576131 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos with really big 2 exponents", (): void => {
        const pitch: Real = { monzo: [317, -200] as RationalMonzo }

        const actual = computeCentsFromPitch(pitch)

        const expected = 8.999826 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("works for pitches with monzos that are greater than an octave", (): void => {
        const pitch: Real = { monzo: [0, 1] as RationalMonzo }

        const actual = computeCentsFromPitch(pitch)

        const expected = 1901.955 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("another example, negative", (): void => {
        const pitch: Real = { monzo: [2, 1, 0, 0, 0, -1] as RationalMonzo } // 12/13

        const actual = computeCentsFromPitch(pitch)

        const expected = -138.572661 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })

    it("gives the cents value of a quotient", (): void => {
        const pitch: Real = { quotient: [3, 2] as RationalQuotient }

        const actual = computeCentsFromPitch(pitch)

        const expected = 701.955001 as Cents
        expect(actual).toBeCloseToTyped(expected)
    })
})
