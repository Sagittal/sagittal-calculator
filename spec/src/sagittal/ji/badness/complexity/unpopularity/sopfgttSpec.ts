import {Sopfr} from "../../../../../../../src/general/math/rational"
import {Two3FreeClass} from "../../../../../../../src/general/music/ji/two3FreeClass"
import {computeSopfgtt} from "../../../../../../../src/sagittal/ji/badness/complexity/unpopularity/sopfgtt"
import {Unpopularity} from "../../../../../../../src/sagittal/ji/badness/complexity/unpopularity/types"

describe("computeSopfgtt", (): void => {
    it("returns the sum of prime factors greater than three", (): void => {
        const two3FreeClass = {monzo: [0, 0, 2, 0, 0, 0, 0, 0, -1]} as Two3FreeClass  // {25/23}₂,₃

        const actual = computeSopfgtt(two3FreeClass)

        const expected = 33 as Unpopularity & Sopfr<{rough: 5}>
        expect(actual).toBe(expected)
    })
})
