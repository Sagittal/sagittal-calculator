import { RationalMonzo } from "../../../../../../src/general/math/rational/num/monzo"
import { computeSecorComplexity } from "../../../../../../src/sagittal/ji/comma/usefulness/secorComplexity"

describe("computeSecorComplexity", (): void => {
    it("works per example given on the forum", (): void => {
        const jiPitch = { monzo: [-4, 4, -1] as RationalMonzo }

        const actual = computeSecorComplexity(jiPitch)

        const expected = 6.120342
        expect(actual).toBeCloseToTyped(expected)
    })
})
