import { Sopfr } from "../../../../../src/general/math"
import { computeJiPitchSopfr } from "../../../../../src/general/music/rational"
import { Pitch } from "../../../../../src/general/music/pitch"

describe("computeJiPitchSopfr", (): void => {
    it("sums the abs values of the prime factors (with repetition) in the monzo", (): void => {
        const jiPitch = { monzo: [5, 6, 0, 0, 1, -1, 2] } as Pitch<{ rational: true }>

        const actual = computeJiPitchSopfr(jiPitch)

        const expected = 2 + 2 + 2 + 2 + 2 + 3 + 3 + 3 + 3 + 3 + 3 + 11 + 13 + 17 + 17 as Sopfr
        expect(actual).toBe(expected)
    })

    it("works for an empty monzo", (): void => {
        const jiPitch = { monzo: [] as unknown[] } as Pitch<{ rational: true }>

        const actual = computeJiPitchSopfr(jiPitch)

        const expected = 0 as Sopfr
        expect(actual).toBe(expected)
    })
})
