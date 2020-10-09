import { Quotient } from "../../../../../src/general/math/numeric/quotient"
import { Pitch } from "../../../../../src/general/music/pitch"
import { computeRationalQuotientFromJiPitch } from "../../../../../src/general/music/rational"

describe("computeRationalQuotientFromJiPitch", (): void => {
    it("given a JI pitch, returns a rational quotient", (): void => {
        const jiPitch = { monzo: [-4, 4, -1] } as Pitch<{ rational: true }>

        const actual = computeRationalQuotientFromJiPitch(jiPitch)

        const expected = [81, 80] as Quotient<{ rational: true }>
        expect(actual).toEqual(expected)
    })
})
