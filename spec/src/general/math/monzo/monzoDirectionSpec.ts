import { computeIsSubMonzo, Monzo } from "../../../../../src/general/math"

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

    // TODO: this is also dependent on that problem with the BigInt or whatever
    // it("throws an error if a monzo is really huge for both the numerator and denominator", () => {
    //     const monzo = [0, 0, 10, -14, 10, -12, 10, -10, 10, -12] as Monzo
    //
    // tslint:disable-next-line:max-line-length
    //     expect(() => computeIsSubMonzo(monzo)).toThrowError("Both the denominator and the numerator are huge for [   0   0  10 -14  10 -12  10 -10  10 -12 ⟩ so it is not possible to tell whether it is sub.")
    // })

    // TODO: add test for isSuperMonzo
})
