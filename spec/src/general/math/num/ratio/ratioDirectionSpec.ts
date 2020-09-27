import { computeSuperRatio, Direction } from "../../../../../../src/general/math"
import {
    Denominator,
    isSubRatio,
    isSuperRatio,
    isUnisonRatio,
    Numerator,
    Ratio,
} from "../../../../../../src/general/math/num/ratio"

describe("isSuperRatio", (): void => {
    it("returns true if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isSuperRatio(ratio)

        expect(actual).toBeTruthy()
    })

    it("returns false if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isSuperRatio(ratio)

        expect(actual).toBeFalsy()
    })

    it("returns false if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isSuperRatio(ratio)

        expect(actual).toBeFalsy()
    })
})

describe("isSubRatio", (): void => {
    it("returns false if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isSubRatio(ratio)

        expect(actual).toBeFalsy()
    })

    it("returns false if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isSubRatio(ratio)

        expect(actual).toBeFalsy()
    })

    it("returns true if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isSubRatio(ratio)

        expect(actual).toBeTruthy()
    })
})

describe("isUnisonRatio", (): void => {
    it("returns false if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isUnisonRatio(ratio)

        expect(actual).toBeFalsy()
    })

    it("returns true if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isUnisonRatio(ratio)

        expect(actual).toBeTruthy()
    })

    it("returns false if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = isUnisonRatio(ratio)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperRatio", (): void => {
    const expected = [5, 4] as Ratio<{ direction: Direction.SUPER }>

    it("returns the ratio unchanged if the numerator is already greater than the denominator", (): void => {
        const ratio = [5, 4] as Ratio

        const actual = computeSuperRatio(ratio)

        expect(actual).toEqual(expected)
    })

    it("returns the reciprocal of the ratio if the numerator is lesser than the denominator", (): void => {
        const ratio = [4, 5] as Ratio

        const actual = computeSuperRatio(ratio)

        expect(actual).toEqual(expected)
    })
})
