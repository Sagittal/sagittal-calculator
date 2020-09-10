import { Integer, Monzo } from "../../../../../src/general/math"
import { computeMonzoFromIntegerOrJiPitch } from "../../../../../src/general/math/monzo"

describe("computeMonzoFromIntegerOrJiPitch", () => {
    const expected = [1, 0, 0, 0, 1] as Monzo

    it("works for an integer", () => {
        const integer = 22 as Integer

        const actual = computeMonzoFromIntegerOrJiPitch(integer)

        expect(actual).toEqual(expected)
    })

    it("works for a monzo", () => {
        const actual = computeMonzoFromIntegerOrJiPitch({ monzo: expected })

        expect(actual).toEqual(expected)
    })
})
