import { Roughness } from "../../../../../src/general/math"
import { Pitch } from "../../../../../src/general/music/pitch"
import { isJiPitchRough } from "../../../../../src/general/music/rational"

describe("isJiPitchRough", (): void => {
    it("returns true if the pitch is n-rough (has no prime factors less than the prime min)", (): void => {
        const jiPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = isJiPitchRough(jiPitch, 5 as 5 & Roughness)

        expect(actual).toBeTruthy()
    })

    it("returns false if the pitch has no prime factors less than the prime min", (): void => {
        const jiPitch = { monzo: [0, 0, 1] } as Pitch<{ rational: true }>

        const actual = isJiPitchRough(jiPitch, 7 as 7 & Roughness)

        expect(actual).toBeFalsy()
    })
})

