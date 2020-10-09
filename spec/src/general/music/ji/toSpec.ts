import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { computeRationalQuotientFromJiPitch } from "../../../../../src/general/music/ji"
import { Pitch } from "../../../../../src/general/music/pitch"

describe("computeRationalQuotientFromJiPitch", (): void => {
    it("given a JI pitch, returns a rational quotient", (): void => {
        const jiPitch = { monzo: [-4, 4, -1] } as Pitch<{ rational: true }>

        const actual = computeRationalQuotientFromJiPitch(jiPitch)

        const expected = [81, 80] as Quotient<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})
