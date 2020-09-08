import { Monzo } from "../../../../src/general/math/monzo"
import { TwoThreeFreeClass } from "../../../../src/sagittal/comma"
import { computeTwoThreeFreeClass } from "../../../../src/sagittal/comma/twoThreeFreeClass"

describe("computeTwoThreeFreeClass", () => {
    it("returns the 5-roughened, n ≥ d version of the ratio", () => {
        const monzo = [1, 1, -1] as Monzo    // 6/5

        const actual = computeTwoThreeFreeClass(monzo)

        const expected = [5, 1] as TwoThreeFreeClass
        expect(actual).toEqual(expected)
    })
})
