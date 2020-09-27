import { Integer, RationalMonzo } from "../../../../../../../src/general/math"
import { computeIntegerMonzoFromIntegerOrMonzo } from "../../../../../../../src/general/math/rational/num/monzo"

describe("computeIntegerMonzoFromIntegerOrMonzo", (): void => {
    const expected = [1, 0, 0, 0, 1] as RationalMonzo

    it("works for an integer", (): void => {
        const integer = 22 as Integer

        const actual = computeIntegerMonzoFromIntegerOrMonzo(integer)

        expect(actual).toEqual(expected)
    })

    it("works for a monzo", (): void => {
        const actual = computeIntegerMonzoFromIntegerOrMonzo(expected)

        expect(actual).toEqual(expected)
    })
})
