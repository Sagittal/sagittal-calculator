import { Decimal, RationalMonzo, RationalQuotient } from "../../../../../src/general/math"
import { compute23FreeClass, TwoThreeFreeClass } from "../../../../../src/general/music"

describe("compute23FreeClass", (): void => {
    it("returns the 2,3-free, THEN super taken (n ≥ d) version of the pitch, branded", (): void => {
        const jiPitch = { monzo: [4, 1, -2] as RationalMonzo }   // 48/25

        const actual = compute23FreeClass(jiPitch)

        const expected = { monzo: [0, 0, 2] } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })

    it("trims the monzo if necessary", (): void => {
        const jiPitch = { monzo: [4, 1] as RationalMonzo }   // 48/1

        const actual = compute23FreeClass(jiPitch)

        const expected = { monzo: [] as RationalMonzo } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })

    it("works for pitches with quotients too", (): void => {
        const jiPitch = { quotient: [48, 25] as RationalQuotient }

        const actual = compute23FreeClass(jiPitch)

        const expected = { quotient: [25, 1] } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })

    it("works for pitches with (integer) decimals too", (): void => {
        const jiPitch = { decimal: 34 as Decimal }

        const actual = compute23FreeClass(jiPitch)

        const expected = { decimal: 17 } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })

    it("if more than one representation is present, it includes all of them", (): void => {
        const jiPitch = {
            decimal: 8.5 as Decimal,
            quotient: [17, 2] as RationalQuotient,
            monzo: [-1, 0, 0, 0, 0, 0, 1] as RationalMonzo,
        }

        const actual = compute23FreeClass(jiPitch)

        const expected = {
            decimal: 17,
            quotient: [17, 1],
            monzo: [0, 0, 0, 0, 0, 0, 1],
        } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })
})
