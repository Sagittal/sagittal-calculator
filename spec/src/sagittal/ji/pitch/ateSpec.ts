import { Abs, Exponent, Integer, Prime } from "../../../../../src/general/math"
import { Monzo } from "../../../../../src/general/math/rational/monzo"
import { JiPitch } from "../../../../../src/general/music/ji"
import { computeAte } from "../../../../../src/sagittal/ji/pitch"

describe("computeAte", (): void => {
    it("returns the ATE (abs 3-exponent) of the JI pitch", (): void => {
        const jiPitch = { monzo: [-1, -3, 1, 0, 1] as Monzo } as JiPitch

        const actual = computeAte(jiPitch)

        const expected = 3 as Abs<Integer & Exponent<3 & Prime>>
        expect(actual).toBe(expected)
    })

    it("works for monzos without 3-exponents", (): void => {
        const jiPitch = { monzo: [] as Monzo } as JiPitch

        const actual = computeAte(jiPitch)

        const expected = 0 as Abs<Integer & Exponent<3 & Prime>>
        expect(actual).toBe(expected)
    })
})
