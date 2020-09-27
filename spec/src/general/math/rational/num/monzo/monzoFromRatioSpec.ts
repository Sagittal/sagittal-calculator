import { computeRationalMonzoFromRationalRatio, RationalMonzo, RationalRatio } from "../../../../../../../src/general"

describe("computeRationalMonzoFromRationalRatio", (): void => {
    it("given a ratio in the form of an array of the numerator and denominator, returns it as a monzo", (): void => {
        const rationalRatio = [4, 5] as RationalRatio

        const actual = computeRationalMonzoFromRationalRatio(rationalRatio)

        const expected = [2, 0, -1] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("works for 1/1", (): void => {
        const rationalRatio = [1, 1] as RationalRatio

        const actual = computeRationalMonzoFromRationalRatio(rationalRatio)

        const expected = [] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("works for ratios where the numerator is 1", (): void => {
        const rationalRatio = [1, 5] as RationalRatio

        const actual = computeRationalMonzoFromRationalRatio(rationalRatio)

        const expected = [0, 0, -1] as RationalMonzo
        expect(actual).toEqual(expected)
    })

    it("works for ratios where the denominator is 1", (): void => {
        const rationalRatio = [5, 1] as RationalRatio

        const actual = computeRationalMonzoFromRationalRatio(rationalRatio)

        const expected = [0, 0, 1] as RationalMonzo
        expect(actual).toEqual(expected)
    })
})
