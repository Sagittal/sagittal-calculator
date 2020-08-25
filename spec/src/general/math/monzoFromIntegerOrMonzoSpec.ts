import { Integer, Monzo } from "../../../../src/general/math"
import { computeMonzoFromIntegerOrMonzo } from "../../../../src/general/math/monzoFromIntegerOrMonzo"

describe("computeMonzoFromIntegerOrMonzo", () => {
    const expected = [1, 0, 0, 0, 1] as Monzo

    it("works for an integer", () => {
        const integer = 22 as Integer

        const actual = computeMonzoFromIntegerOrMonzo(integer)

        expect(actual).toEqual(expected)
    })

    it("works for a monzo", () => {
        const actual = computeMonzoFromIntegerOrMonzo(expected)

        expect(actual).toEqual(expected)
    })
})
