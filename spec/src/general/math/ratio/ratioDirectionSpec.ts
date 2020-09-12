import {
    computeIsSubRatio,
    computeIsSuperRatio,
    computeIsUnisonRatio,
    Denominator,
    Numerator,
    Ratio,
} from "../../../../../src/general/math/ratio"

describe("computeIsSuperRatio", () => {
    it("returns true if n > d", () => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsSuperRatio(ratio)

        expect(actual).toBeTruthy()
    })

    it("returns false if n = d", () => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsSuperRatio(ratio)

        expect(actual).toBeFalsy()
    })

    it("returns false if n < d", () => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsSuperRatio(ratio)

        expect(actual).toBeFalsy()
    })
})

describe("computeIsSubRatio", () => {
    it("returns false if n > d", () => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsSubRatio(ratio)

        expect(actual).toBeFalsy()
    })

    it("returns false if n = d", () => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsSubRatio(ratio)

        expect(actual).toBeFalsy()
    })

    it("returns true if n < d", () => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsSubRatio(ratio)

        expect(actual).toBeTruthy()
    })
})

describe("computeIsUnisonRatio", () => {
    it("returns false if n > d", () => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsUnisonRatio(ratio)

        expect(actual).toBeFalsy()
    })

    it("returns true if n = d", () => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsUnisonRatio(ratio)

        expect(actual).toBeTruthy()
    })

    it("returns false if n < d", () => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const ratio = [numerator, denominator] as Ratio

        const actual = computeIsUnisonRatio(ratio)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperRatio", () => {
    // TODO: test, along with invert and sub
})
