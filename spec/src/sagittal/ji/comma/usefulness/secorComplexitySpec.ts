import { Monzo } from "../../../../../../src/general/math/num/monzo"
import { computeSecorComplexity } from "../../../../../../src/sagittal/ji/comma/usefulness/secorComplexity"

describe("computeSecorComplexity", (): void => {
    it("works per example given on the forum", (): void => {
        const monzo = [-4, 4, -1] as Monzo

        const actual = computeSecorComplexity({ monzo })

        const expected = 6.120342
        expect(actual).toBeCloseToTyped(expected)
    })
})
