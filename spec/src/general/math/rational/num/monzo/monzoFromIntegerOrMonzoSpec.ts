import { Integer, RationalMonzo } from "../../../../../../../src/general/math"
import { computeRationalMonzoFromIntegerOrRationalMonzo } from "../../../../../../../src/general/math/rational/num/monzo"

describe("computeRationalMonzoFromIntegerOrRationalMonzo", (): void => {
    const expected = [1, 0, 0, 0, 1] as RationalMonzo

    it("works for an integer", (): void => {
        const integer = 22 as Integer

        const actual = computeRationalMonzoFromIntegerOrRationalMonzo(integer)

        expect(actual).toEqual(expected)
    })

    it("works for a monzo", (): void => {
        const actual = computeRationalMonzoFromIntegerOrRationalMonzo(expected)

        expect(actual).toEqual(expected)
    })
})
