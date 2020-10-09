import { Copfr } from "../../../../../src/general/math/rational"
import { Pitch } from "../../../../../src/general/music/pitch"
import { computeJiPitchCopfr } from "../../../../../src/general/music/rational"

describe("computeJiPitchCopfr", (): void => {
    it("returns the count of prime factors (with repetition) in the monzo", (): void => {
        const jiPitch = { monzo: [5, 4, -3, -2, 5] } as Pitch<{ rational: true }>

        const actual = computeJiPitchCopfr(jiPitch)

        const expected = 19 as Copfr
        expect(actual).toBe(expected)
    })
})
