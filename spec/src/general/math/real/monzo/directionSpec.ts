import {
    computeSuperRealMonzo,
    Direction,
    invertRealMonzo,
    isSubRealMonzo,
    isSuperRealMonzo,
    RealMonzo,
} from "../../../../../../src/general/math"
import { isUnisonRealMonzo } from "../../../../../../src/general/math/real/monzo"

describe("isSubRealMonzo", (): void => {
    it("returns false if the monzo is super", (): void => {
        const monzo = [-1, 1] as RealMonzo      // 3/2 = 1.5 > 1

        const actual = isSubRealMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo is sub", (): void => {
        const monzo = [1, -1] as RealMonzo      // 2/3 = 0.667 < 1

        const actual = isSubRealMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is unison", (): void => {
        const monzo = [] as RealMonzo      // 1/1 = 1

        const actual = isSubRealMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a monzo is really huge", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as RealMonzo

        const actual = isSubRealMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a monzo is really tiny", (): void => {
        const monzo = [0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as RealMonzo

        const actual = isSubRealMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a monzo is really huge", (): void => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as RealMonzo

        const actual = isSubRealMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle another situation where a monzo is really tiny", (): void => {
        const monzo = [0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as RealMonzo

        const actual = isSubRealMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a monzo is really huge for both the numerator and denominator", (): void => {
        const monzo = [0, 0, 10, -14, 10, -12, 10, -10, 10, -12] as RealMonzo

        const actual = isSubRealMonzo(monzo)

        expect(actual).toBeTruthy()
    })
})

describe("isSuperRealMonzo", (): void => {
    it("works the opposite from isSubRealMonzo (except the unison, which is also false)", (): void => {
        expect(isSuperRealMonzo([-1, 1] as RealMonzo)).toBeTruthy()
        expect(isSuperRealMonzo([1, -1] as RealMonzo)).toBeFalsy()
        expect(isSuperRealMonzo([] as RealMonzo)).toBeFalsy()
        expect(isSuperRealMonzo([0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as RealMonzo)).toBeTruthy()
        expect(isSuperRealMonzo([0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as RealMonzo)).toBeFalsy()
        expect(isSuperRealMonzo([0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as RealMonzo)).toBeTruthy()
        expect(isSuperRealMonzo([0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as RealMonzo)).toBeFalsy()
    })
})

describe("isUnisonRealMonzo", (): void => {
    it("returns false if the monzo is super", (): void => {
        const monzo = [-1, 1] as RealMonzo      // 3/2 = 1.5 > 1

        const actual = isUnisonRealMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo is unison", (): void => {
        const monzo = [] as RealMonzo      // 1/1 = 1

        const actual = isUnisonRealMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the monzo is sub", (): void => {
        const monzo = [1, -1] as RealMonzo      // 2/3 = 0.667 < 1

        const actual = isUnisonRealMonzo(monzo)

        expect(actual).toBeFalsy()
    })
})

describe("computeSuperRealMonzo", (): void => {
    it("returns the monzo if it is already super", (): void => {
        const monzo = [0, 0, 0, 0, 2] as RealMonzo

        const actual = computeSuperRealMonzo(monzo)

        expect(actual).toEqual(monzo)
    })

    it("returns the reciprocal of the monzo if it is not already super", (): void => {
        const monzo = [0, 0, 0, 1, -2] as RealMonzo     // 7/121 = 0.0579 < 1

        const actual = computeSuperRealMonzo(monzo)

        const expected = [0, 0, 0, -1, 2] as RealMonzo  // 121/7 = 17.286 > 1
        expect(actual).toEqual(expected)
    })
})

describe("invertRealMonzo", (): void => {
    it("returns the inverted (negated) version of the monzo", (): void => {
        const monzo = [4, 0, -1, 1] as RealMonzo<{ direction: Direction.SUPER }> // 112/5

        const actual: RealMonzo<{ direction: Direction.SUPER }> = invertRealMonzo(monzo)

        const expected = [-4, 0, 1, -1] as RealMonzo // 5/112
        expect(actual).toEqual(expected)
    })
})
