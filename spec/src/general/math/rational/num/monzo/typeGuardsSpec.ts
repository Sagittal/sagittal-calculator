import { Monzo } from "../../../../../../../src/general/math/num/monzo"
import { isRationalMonzo } from "../../../../../../../src/general/math/rational/num/monzo"
import { isIntegerMonzo } from "../../../../../../../src/general/math/rational/num/monzo/typeGuards"

describe("isIntegerMonzo", (): void => {
    it("returns true if every term is positive or zero", (): void => {
        const monzo = [0, 2, 0, 1] as Monzo

        const actual = isIntegerMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns false if every term is negative or zero", (): void => {
        const monzo = [-3, 0, -5] as Monzo

        const actual = isIntegerMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns false if the terms are not all positive or zero or all negative or zero", (): void => {
        const monzo = [-2, 0, 1] as Monzo

        const actual = isIntegerMonzo(monzo)

        expect(actual).toBeFalsy()
    })

    it("returns false if any of the terms are not integers", (): void => {
        const monzo = [0, 2.5, 0, 1] as Monzo

        const actual = isIntegerMonzo(monzo)

        expect(actual).toBeFalsy()
    })
})

describe("isRationalMonzo", (): void => {
    it("returns true if every term is an integer", (): void => {
        const monzo = [0, 2, 0, 1] as Monzo

        const actual = isRationalMonzo(monzo)

        expect(actual).toBeTruthy()
    })

    it("returns true if any term is not an integer", (): void => {
        const monzo = [2.5, 1.5, 0] as Monzo

        const actual = isRationalMonzo(monzo)

        expect(actual).toBeFalsy()
    })
})
