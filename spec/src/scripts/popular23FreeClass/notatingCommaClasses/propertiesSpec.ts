import {Index, Two3FreeClass} from "../../../../../src/general"
import {CommaClassId, SymbolSubset} from "../../../../../src/sagittal/notation"
import {
    computeNotatingCommaClassesProperties,
    NotatingCommaClassesProperties,
} from "../../../../../src/scripts/popular23FreeClass/notatingCommaClasses"

describe("computeNotatingCommaClassesProperties", (): void => {
    it("returns, for the given 2,3-free class, all notating comma class's IDs (if any), as well as the corresponding list of indices of the smallest symbol subsets these comma classes appear in", (): void => {
        const two3FreeClass = {monzo: [0, 0, -1, 1]} as Two3FreeClass

        const actual = computeNotatingCommaClassesProperties(two3FreeClass)

        const expected: NotatingCommaClassesProperties = {
            notatingCommaClassIds: [CommaClassId._5_7_k, CommaClassId._5_7_C],
            notatingCommaClassSmallestSymbolSubsetIndices: [1, 5] as Array<Index<SymbolSubset>>,
        }
        expect(actual).toEqual(expected)
    })
})
