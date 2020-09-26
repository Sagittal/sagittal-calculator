import { Monzo } from "../../../../../../src/general/math/num/monzo"
import { computeMonzoIsInteger } from "../../../../../../src/general/math/num/monzo/typeGuards"

describe("computeMonzoIsInteger", (): void => {
    it("returns true if every term is positive or zero", (): void => {
        const monzo = [0, 2, 0, 1] as Monzo

        const actual = computeMonzoIsInteger(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns true if every term is negative or zero", (): void => {
        const monzo = [-3, 0, -5] as Monzo

        const actual = computeMonzoIsInteger(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if the terms are not all positive or zero or all negative or zero", (): void => {
        const monzo = [-2, 0, 1] as Monzo

        const actual = computeMonzoIsInteger(monzo)

        expect(actual).toBeFalsy()
    })
})
