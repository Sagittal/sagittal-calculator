import { Ratio } from "../../../../../src/general/math"
import { Monzo } from "../../../../../src/general/math/monzo"
import { equalJiPitches, JiPitch } from "../../../../../src/general/music"

describe("equalJiPitches", (): void => {
    it("returns true if the monzos match", (): void => {
        const jiPitchA: JiPitch = { monzo: [0, 0, 1, -1] as Monzo }
        const jiPitchB: JiPitch = { monzo: [0, 0, 1, -1] as Monzo }

        const actual = equalJiPitches(jiPitchA, jiPitchB)

        expect(actual).toBeTruthy()
    })

    it("returns true if the ratios match", (): void => {
        const jiPitchA: JiPitch = { ratio: [5, 7] as Ratio }
        const jiPitchB: JiPitch = { ratio: [5, 7] as Ratio }

        const actual = equalJiPitches(jiPitchA, jiPitchB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzos do not match", (): void => {
        const jiPitchA: JiPitch = { monzo: [0, 0, 1, -1] as Monzo }
        const jiPitchB: JiPitch = { monzo: [0, 0, -1, -1] as Monzo }

        const actual = equalJiPitches(jiPitchA, jiPitchB)

        expect(actual).toBeFalsy()
    })

    it("returns false if the ratios do not match", (): void => {
        const jiPitchA: JiPitch = { ratio: [5, 7] as Ratio }
        const jiPitchB: JiPitch = { ratio: [5, 6] as Ratio }

        const actual = equalJiPitches(jiPitchA, jiPitchB)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo of one represents the same JI pitch as the ratio of the other", (): void => {
        const jiPitchA: JiPitch = { monzo: [0, 0, 1, -1] as Monzo }
        const jiPitchB: JiPitch = { ratio: [5, 7] as Ratio }

        const actual = equalJiPitches(jiPitchA, jiPitchB)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo of one does not represent the same JI pitch as the ratio of the other", (): void => {
        const jiPitchA: JiPitch = { monzo: [0, 0, 1, -1] as Monzo }
        const jiPitchB: JiPitch = { ratio: [5, 6] as Ratio }

        const actual = equalJiPitches(jiPitchA, jiPitchB)

        expect(actual).toBeFalsy()
    })
})
