import { Monzo } from "../../../../src/general/math"
import { computeJiPitchMonzo, JiPitch } from "../../../../src/general/music"

describe("computeJiPitchMonzo", () => {
    it("trims the monzo, as a courtesy", () => {
        const jiPitch: JiPitch = { monzo: [ 0, 0, 0, 0 ] as Monzo }
        
        const actual = computeJiPitchMonzo(jiPitch)
        
        expect(actual).toEqual([])
    })
})
