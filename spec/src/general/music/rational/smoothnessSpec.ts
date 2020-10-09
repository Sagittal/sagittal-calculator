import { Max, Prime, Smoothness, THREE_SMOOTHNESS } from "../../../../../src/general/math"
import { FIVE_SMOOTHNESS } from "../../../../../src/general/math/rational/constants"
import { Pitch } from "../../../../../src/general/music/pitch"
import { computeJiPitchSmoothness, isJiPitchSmooth } from "../../../../../src/general/music/rational"

describe("isJiPitchSmooth", (): void => {
    it("returns true if the pitch is n-smooth (within the n prime limit)", (): void => {
        const jiPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = isJiPitchSmooth(jiPitch, FIVE_SMOOTHNESS)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch is not within the given prime limit", (): void => {
        const jiPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = isJiPitchSmooth(jiPitch, THREE_SMOOTHNESS)

        expect(actual).toBeFalsy()
    })
})

describe("computeJiPitchSmoothness", (): void => {
    it("returns the greatest prime factor (AKA prime limit) of the given JI pitch", (): void => {
        const jiPitch = { monzo: [2, 3, 0, 0, 4] } as Pitch<{ rational: true }>

        const actual = computeJiPitchSmoothness(jiPitch)

        const expected = 11 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works when its monzo has trailing zeroes", (): void => {
        const jiPitch = { monzo: [2, 3, 4, 0, 0] } as Pitch<{ rational: true }>

        const actual = computeJiPitchSmoothness(jiPitch)

        const expected = 5 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })

    it("works for those with an empty monzo", (): void => {
        const jiPitch = { monzo: [] as unknown[] } as Pitch<{ rational: true }>

        const actual = computeJiPitchSmoothness(jiPitch)

        const expected = 1 as Smoothness & Max<Prime>
        expect(actual).toBe(expected)
    })
})
