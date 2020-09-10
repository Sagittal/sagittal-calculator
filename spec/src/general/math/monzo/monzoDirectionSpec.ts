import { computeIsSubMonzo, computeIsSuperMonzo, Monzo } from "../../../../../src/general/math"

describe("computeIsSubMonzo", () => {
    it("returns false if the monzo is super", () => {
        const monzo = [-1, 1] as Monzo      // 3/2 = 1.5 > 1

        const actual = computeIsSubMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns true if the monzo is sub", () => {
        const monzo = [1, -1] as Monzo      // 2/3 = 0.667 < 1

        const actual = computeIsSubMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("can handle the situation where a monzo is really huge", () => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo

        const actual = computeIsSubMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle the situation where a monzo is really tiny", () => {
        const monzo = [0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Monzo

        const actual = computeIsSubMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("can handle another situation where a monzo is really huge", () => {
        const monzo = [0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Monzo

        const actual = computeIsSubMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("can handle another situation where a monzo is really tiny", () => {
        const monzo = [0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Monzo

        const actual = computeIsSubMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("throws an error if a monzo is really huge for both the numerator and denominator", () => {
        const monzo = [0, 0, 10, -14, 10, -12, 10, -10, 10, -12] as Monzo

        expect(() => computeIsSubMonzo(monzo)).toThrowError("Both the denominator and the numerator are huge for [   0   0  10 -14  10 -12  10 -10  10 -12 ⟩ so it is not possible to tell whether it is sub.")
    })
})

describe("computeIsSuperMonzo", () => {
    it("works the opposite from computeIsSubMonzo", () => {
        expect(computeIsSuperMonzo([-1, 1] as Monzo)).toBeTruthy()
        expect(computeIsSuperMonzo([1, -1] as Monzo)).toBeFalsy()
        expect(computeIsSuperMonzo([0, 0, 6, 4, 2, 2, 0, 1, 1, 1] as Monzo)).toBeTruthy()
        expect(computeIsSuperMonzo([0, 0, -6, -4, -2, -2, 0, -1, -1, -1] as Monzo)).toBeFalsy()
        expect(computeIsSuperMonzo([0, 0, 6, 4, 2, 2, 0, -1, 1, 2] as Monzo)).toBeTruthy()
        expect(computeIsSuperMonzo([0, 0, -6, -4, -2, -2, 0, 1, -1, -2] as Monzo)).toBeFalsy()
    })

    it("throws an error if a monzo is really huge for both the numerator and denominator", () => {
        const monzo = [0, 0, 10, -14, 10, -12, 10, -10, 10, -12] as Monzo

        expect(() => computeIsSuperMonzo(monzo)).toThrowError("Both the denominator and the numerator are huge for [   0   0  10 -14  10 -12  10 -10  10 -12 ⟩ so it is not possible to tell whether it is sub.")
    })
})
