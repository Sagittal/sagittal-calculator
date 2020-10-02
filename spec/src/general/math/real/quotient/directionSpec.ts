import { computeSuperRealQuotient, Direction } from "../../../../../../src/general/math"
import { isSubRealQuotient, isSuperRealQuotient, isUnisonRealQuotient, RealQuotient } from "../../../../../../src/general/math/real/quotient"
import { Denominator, Numerator } from "../../../../../../src/general/math/real/quotient/types"

describe("isSuperRealQuotient", (): void => {
    it("returns true if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isSuperRealQuotient(realQuotient)

        expect(actual).toBeTruthy()
    })

    it("returns false if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isSuperRealQuotient(realQuotient)

        expect(actual).toBeFalsy()
    })

    it("returns false if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isSuperRealQuotient(realQuotient)

        expect(actual).toBeFalsy()
    })
})

describe("isSubRealQuotient", (): void => {
    it("returns false if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isSubRealQuotient(realQuotient)

        expect(actual).toBeFalsy()
    })

    it("returns false if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isSubRealQuotient(realQuotient)

        expect(actual).toBeFalsy()
    })

    it("returns true if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isSubRealQuotient(realQuotient)

        expect(actual).toBeTruthy()
    })
})

describe("isUnisonRealQuotient", (): void => {
    it("returns false if n > d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 54 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isUnisonRealQuotient(realQuotient)

        expect(actual).toBeFalsy()
    })

    it("returns true if n = d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 55 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isUnisonRealQuotient(realQuotient)

        expect(actual).toBeTruthy()
    })

    it("returns false if n < d", (): void => {
        const numerator = 55 as Numerator
        const denominator = 56 as Denominator
        const realQuotient = [numerator, denominator] as RealQuotient

        const actual = isUnisonRealQuotient(realQuotient)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperRealQuotient", (): void => {
    const expected = [5, 4] as RealQuotient<{ direction: Direction.SUPER }>

    it("returns the quotient unchanged if the numerator is already greater than the denominator", (): void => {
        const realQuotient = [5, 4] as RealQuotient<{ direction: Direction.SUB }>

        const actual = computeSuperRealQuotient(realQuotient)

        expect(actual).toEqual(expected)
    })

    it("returns the reciprocal of the quotient if the numerator is lesser than the denominator", (): void => {
        const realQuotient = [4, 5] as RealQuotient<{ direction: Direction.SUB }>

        const actual = computeSuperRealQuotient(realQuotient)

        expect(actual).toEqual(expected)
    })
})
