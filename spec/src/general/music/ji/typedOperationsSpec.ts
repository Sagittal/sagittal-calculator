import { computeStackedJiPitch, computeJiInterval } from "../../../../../src/general/music/ji"
import { computeStackedPitch, Pitch } from "../../../../../src/general/music/pitch"

describe("computeJiInterval", (): void => {
    it("works for two JI pitches, subtracting the from's monzo from the to's monzo", (): void => {
        const fromJiPitch = { monzo: [-1, 1] } as Pitch<{ rational: true }>
        const toJiPitch = { monzo: [-2, 0, 0, 1] } as Pitch<{ rational: true }>

        const actual = computeJiInterval(fromJiPitch, toJiPitch)

        const expected = { monzo: [-1, -1, 0, 1] } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})

describe("computeStackedJiPitch", (): void => {
    it("works", (): void => {
        const augendJiPitch = { monzo: [2, -1, -1, 1] } as Pitch<{ rational: true }>
        const addendJiPitch = { monzo: [-2, 1] } as Pitch<{ rational: true }>

        const actual = computeStackedJiPitch(augendJiPitch, addendJiPitch)

        const expected = { monzo: [0, 0, -1, 1] } as Pitch<{ rational: true }>
        expect(actual).toBeCloseToObject(expected)
    })
})
