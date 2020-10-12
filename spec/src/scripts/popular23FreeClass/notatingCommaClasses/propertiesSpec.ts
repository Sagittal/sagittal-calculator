import { Id, Index, Two3FreeClass } from "../../../../../src/general"
import { CommaClass, SymbolSubset } from "../../../../../src/sagittal/notations"
import {
    computeNotatingCommaClassesProperties,
    NotatingCommaClassesProperties,
} from "../../../../../src/scripts/popular23FreeClass/notatingCommaClasses"

describe("computeNotatingCommaClassesProperties", (): void => {
    it("returns, for the given 2,3-free class, all notating comma class's IDs (if any), as well as the corresponding list of indices of the smallest symbol subsets these comma classes appear in", (): void => {
        const two3FreeClass = { monzo: [0, 0, -1, 1] } as Two3FreeClass

        const actual = computeNotatingCommaClassesProperties(two3FreeClass)

        const expected: NotatingCommaClassesProperties = {
            notatingCommaClassIds: [12, 62] as Array<Id<CommaClass>>,
            notatingCommaClassSmallestSymbolSubsetIndices: [1, 5] as Array<Index<SymbolSubset>>,
        }
        expect(actual).toEqual(expected)
    })
})
