import { Monzo } from "../../../../../src/general/math/rational/monzo"
import { Ratio } from "../../../../../src/general/math/rational/ratio"
import { compute23FreeClass, TwoThreeFreeClass } from "../../../../../src/general/music"

describe("compute23FreeClass", (): void => {
    it("returns the 2,3-free, super (n ≥ d) version of the ratio, in the form of a branded comma", (): void => {
        const monzo = [4, 1, -2] as Monzo    // 48/25

        const actual = compute23FreeClass({ monzo })

        const expected = { monzo: [0, 0, 2] } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })

    it("trims the monzo if necessary", (): void => {
        const monzo = [4, 1] as Monzo    // 48/1

        const actual = compute23FreeClass({ monzo })

        const expected = { monzo: [] as Monzo } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })

    it("works for commas with ratios instead of monzos too", (): void => {
        const ratio = [48, 25] as Ratio

        const actual = compute23FreeClass({ ratio })

        const expected = { ratio: [25, 1] } as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })
})
