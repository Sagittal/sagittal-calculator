import {Scamon} from "../../../../../../src/general/math/numeric/scamon"
import {Complexity} from "../../../../../../src/sagittal/ji/badness/complexity"
import {computeSecorComplexity} from "../../../../../../src/sagittal/ji/badness/complexity/secor"

describe("computeSecorComplexity", (): void => {
    it("works per example given on the forum", (): void => {
        const jiPitch = {monzo: [-4, 4, -1]} as Scamon<{rational: true}>

        const actual = computeSecorComplexity(jiPitch)

        const expected = 6.120342 as Complexity
        expect(actual).toBeCloseToTyped(expected)
    })
})
