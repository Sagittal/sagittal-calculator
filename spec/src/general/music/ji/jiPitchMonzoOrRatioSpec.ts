import { Monzo } from "../../../../../src/general/math"
import { computeMonzoFromJiPitch, JiPitch } from "../../../../../src/general/music"

describe("computeMonzoFromJiPitch", (): void => {
    it("trims the monzo, as a courtesy", (): void => {
        const jiPitch: JiPitch = { monzo: [0, 0, 0, 0] as Monzo }

        const actual = computeMonzoFromJiPitch(jiPitch)

        expect(actual).toEqual([])
    })
})
