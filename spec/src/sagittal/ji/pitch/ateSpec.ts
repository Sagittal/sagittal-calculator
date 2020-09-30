import { Abs, Exponent, IntegerDecimal, Prime, Rational, RationalMonzo } from "../../../../../src/general/math"
import { computeAte } from "../../../../../src/sagittal/ji/pitch"

describe("computeAte", (): void => {
    it("returns the ATE (abs 3-exponent) of the JI pitch", (): void => {
        const jiPitch = { monzo: [-1, -3, 1, 0, 1] as RationalMonzo } as Rational

        const actual = computeAte(jiPitch)

        const expected = 3 as Abs<IntegerDecimal & Exponent<3 & Prime>>
        expect(actual).toBe(expected)
    })

    it("works for monzos without 3-exponents", (): void => {
        const jiPitch = { monzo: [] as unknown[] as RationalMonzo } as Rational

        const actual = computeAte(jiPitch)

        const expected = 0 as Abs<IntegerDecimal & Exponent<3 & Prime>>
        expect(actual).toBe(expected)
    })
})
