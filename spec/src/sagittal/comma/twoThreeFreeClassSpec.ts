import { Monzo } from "../../../../src/general/math/monzo"
import { TwoThreeFreeClass } from "../../../../src/sagittal/comma"
import { compute23FreeClass } from "../../../../src/sagittal/comma/twoThreeFreeClass"

describe("compute23FreeClass", () => {
    it("returns the 5-roughened, n ≥ d version of the ratio", () => {
        const monzo = [1, 1, -1] as Monzo    // 6/5

        const actual = compute23FreeClass(monzo)

        const expected = [5, 1] as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })
})
