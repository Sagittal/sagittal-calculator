import {
    computeSuperMonzo,
    Direction,
    invertMonzo,
    isSubMonzo,
    isSuperMonzo,
    Monzo,
} from "../../../../../../src/general/math"
import { isUnisonMonzo } from "../../../../../../src/general/math/numeric/monzo"

describe("isSubMonzo", (): void => {
    it("returns false if the monzo is super", (): void => {
        const monzo = [-1, 1] as Monzo      // 3/2 = 1.5 > 1

        const actual = isSubMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo is sub", (): void => {
        const monzo = [1, -1] as Monzo      // 2/3 = 0.667 < 1

        const actual = isSubMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is unison", (): void => {
        const monzo = [] as Monzo      // 1/1 = 1

        const actual = isSubMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a monzo represents a huge number", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo

        const actual = isSubMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a monzo represents a tiny number", (): void => {
        const monzo = [0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Monzo

        const actual = isSubMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a monzo represents a huge number", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Monzo

        const actual = isSubMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle another situation where a monzo represents a tiny number", (): void => {
        const monzo = [0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Monzo

        const actual = isSubMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a monzo is really huge for both the numerator and denominator", (): void => {
        const monzo = [0, 0, 10, -14, 10, -12, 10, -10, 10, -12] as Monzo

        const actual = isSubMonzo(monzo)

        expect(actual).toBeTruthy()
    })
})

describe("isSuperMonzo", (): void => {
    it("works the opposite from isSubMonzo (except the unison, which is also false)", (): void => {
        expect(isSuperMonzo([-1, 1] as Monzo)).toBeTruthy()
        expect(isSuperMonzo([1, -1] as Monzo)).toBeFalsy()
        expect(isSuperMonzo([] as Monzo)).toBeFalsy()
        expect(isSuperMonzo([0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo)).toBeTruthy()
        expect(isSuperMonzo([0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Monzo)).toBeFalsy()
        expect(isSuperMonzo([0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Monzo)).toBeTruthy()
        expect(isSuperMonzo([0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Monzo)).toBeFalsy()
    })
})

describe("isUnisonMonzo", (): void => {
    it("returns false if the monzo is super", (): void => {
        const monzo = [-1, 1] as Monzo      // 3/2 = 1.5 > 1

        const actual = isUnisonMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo is unison", (): void => {
        const monzo = [] as Monzo      // 1/1 = 1

        const actual = isUnisonMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is sub", (): void => {
        const monzo = [1, -1] as Monzo      // 2/3 = 0.667 < 1

        const actual = isUnisonMonzo(monzo)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperMonzo", (): void => {
    it("returns the monzo if it is already super", (): void => {
        const monzo = [0, 0, 0, 0, 2] as Monzo

        const actual = computeSuperMonzo(monzo)

        expect(actual).toEqual(monzo)
    })

    it("returns the reciprocal of the monzo if it is not already super", (): void => {
        const monzo = [0, 0, 0, 1, -2] as Monzo     // 7/121 = 0.0579 < 1

        const actual = computeSuperMonzo(monzo)

        const expected = [0, 0, 0, -1, 2] as Monzo  // 121/7 = 17.286 > 1
        expect(actual).toEqual(expected)
    })
})

describe("invertMonzo", (): void => {
    it("returns the inverted (negated) version of the monzo", (): void => {
        const monzo = [4, 0, -1, 1] as Monzo<{ direction: Direction.SUPER }> // 112/5

        const actual: Monzo<{ direction: Direction.SUB }> = invertMonzo(monzo)

        const expected = [-4, 0, 1, -1] as Monzo // 5/112
        expect(actual).toEqual(expected)
    })
})
