import { Mean, MeanType } from "../../../../../src/general/math"
import {
    computeJiInterval,
    computeJiPitchGeometricMean,
    computeStackedJiPitch,
} from "../../../../../src/general/music/rational"
import { Interval, Pitch } from "../../../../../src/general/music/pitch"

describe("computeJiInterval", (): void => {
    it("works for two JI pitches, subtracting the from's monzo from the to's monzo", (): void => {
        const fromJiPitch = { monzo: [-1, 1] } as Pitch<{ rational: true }>
        const toJiPitch = { monzo: [-2, 0, 0, 1] } as Pitch<{ rational: true }>

        const actual = computeJiInterval(fromJiPitch, toJiPitch)

        const expected = { monzo: [-1, -1, 0, 1] } as Interval<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})

describe("computeStackedJiPitch", (): void => {
    it("works", (): void => {
        const augendJiPitch = { monzo: [2, -1, -1, 1] } as Pitch<{ rational: true }>
        const addendJiPitch = { monzo: [-2, 1] } as Pitch<{ rational: true }>

        const actual = computeStackedJiPitch(augendJiPitch, addendJiPitch)

        const expected = { monzo: [0, 0, -1, 1] } as Pitch<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})

describe("computeJiPitchGeometricMean", (): void => {
    it("sums the monzos and takes the nth-root where n is the count of pitches", (): void => {
        const pitchA = { monzo: [0, -5, 1] } as Pitch<{ rational: true }>
        const pitchB = { monzo: [2, 0, 1] } as Pitch<{ rational: true }>
        const pitchC = { monzo: [0, 4, 1] } as Pitch<{ rational: true }>

        const actual = computeJiPitchGeometricMean(pitchA, pitchB, pitchC)

        const expected = {
            monzo: [2, -1, 3],
            scaler: [1, 3],
        } as Mean<{ of: Pitch<{ rational: false }>, meanType: MeanType.GEOMETRIC }>
        expect(actual).toEqual(expected)
    })
})
