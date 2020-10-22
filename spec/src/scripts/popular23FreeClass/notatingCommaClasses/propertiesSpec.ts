import { Id, Index, Two3FreeClass } from "../../../../../src/general"
import {FlaccoSubset} from "../../../../../src/sagittal/accidental"
import {CommaClass} from "../../../../../src/sagittal/ji/comma"
import {
    computeNotatingCommaClassesProperties,
    NotatingCommaClassesProperties,
} from "../../../../../src/scripts/popular23FreeClass/notatingCommaClasses"

describe("computeNotatingCommaClassesProperties", (): void => {
    it("returns, for the given 2,3-free class, all notating comma class's IDs (if any), as well as the corresponding list of indices of the smallest flacco subsets these comma classes appear in", (): void => {
        const two3FreeClass = { monzo: [0, 0, -1, 1] } as Two3FreeClass

        const actual = computeNotatingCommaClassesProperties(two3FreeClass)

        const expected: NotatingCommaClassesProperties = {
            notatingCommaClassIds: [12, 62] as Array<Id<CommaClass>>,
            notatingCommaClassSmallestFlaccoSubsetIndices: [1, 5] as Array<Index<FlaccoSubset>>,
        }
        expect(actual).toEqual(expected)
    })
})
