import { isRationalMonzo, RationalMonzo } from "../../../../../../../src/general/math/rational/real/monzo"
import { isIntegerMonzo } from "../../../../../../../src/general/math/rational/real/monzo/typeGuards"

describe("isIntegerMonzo", (): void => {
    it("returns true if every prime exponent is positive or zero", (): void => {
        const candidateIntegerMonzo = [0, 2, 0, 1] as RationalMonzo

        const actual = isIntegerMonzo(candidateIntegerMonzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if every prime exponent is negative or zero", (): void => {
        const candidateIntegerMonzo = [-3, 0, -5] as RationalMonzo

        const actual = isIntegerMonzo(candidateIntegerMonzo)

        expect(actual).toBeFalsy()
    })

    it("returns false if the prime exponents are not all positive or zero or all negative or zero", (): void => {
        const candidateIntegerMonzo = [-2, 0, 1] as RationalMonzo

        const actual = isIntegerMonzo(candidateIntegerMonzo)

        expect(actual).toBeFalsy()
    })

    it("returns false if any of the prime exponents are not integers", (): void => {
        const candidateIntegerMonzo = [0, 2.5, 0, 1] as RationalMonzo

        const actual = isIntegerMonzo(candidateIntegerMonzo)

        expect(actual).toBeFalsy()
    })
})

describe("isRationalMonzo", (): void => {
    it("returns true if every prime exponent is an integer", (): void => {
        const candidateIntegerMonzo = [0, 2, 0, 1] as RationalMonzo

        const actual = isRationalMonzo(candidateIntegerMonzo)

        expect(actual).toBeTruthy()
    })

    it("returns true if any prime exponent is not an integer", (): void => {
        const candidateIntegerMonzo = [2.5, 1.5, 0] as RationalMonzo

        const actual = isRationalMonzo(candidateIntegerMonzo)

        expect(actual).toBeFalsy()
    })
})
