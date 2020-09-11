import { Monzo } from "../../../../src/general/math/monzo"
import { compute23FreeClass, TwoThreeFreeClass } from "../../../../src/general/music"

describe("compute23FreeClass", () => {
    it("returns the 2,3-free, super (n ≥ d) version of the ratio, in the form of a branded comma", () => {
        const monzo = [4, 1, -2] as Monzo    // 48/25

        const actual = compute23FreeClass({ monzo })

        const expected = { monzo: [0, 0, 2] } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })

    it("trims the monzo if necessary", () => {
        const monzo = [4, 1] as Monzo    // 48/1

        const actual = compute23FreeClass({ monzo })

        const expected = { monzo: [] as Monzo } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })
})
