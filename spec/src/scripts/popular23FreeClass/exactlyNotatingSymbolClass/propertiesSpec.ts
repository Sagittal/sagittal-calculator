import { Id, Index, Two3FreeClass } from "../../../../../src/general"
import { SymbolClass, SymbolSubset } from "../../../../../src/sagittal/notations"
import {
    computeExactlyNotatingSymbolClassProperties,
    ExactlyNotatingSymbolClassProperties,
} from "../../../../../src/scripts/popular23FreeClass/exactlyNotatingSymbolClass"

describe("computeExactlyNotatingSymbolClassProperties", (): void => {
    it("returns, for the given 2,3-free class, all exactly notating symbol class's IDs (if any), as well as the corresponding list of indices of the smallest symbol subsets these symbol classes appear in", (): void => {
        const two3FreeClass = { monzo: [0, 0, -1, 1] } as Two3FreeClass

        const actual = computeExactlyNotatingSymbolClassProperties(two3FreeClass)

        const expected: ExactlyNotatingSymbolClassProperties = {
            exactlyNotatingSymbolClassIds: [12, 62] as Array<Id<SymbolClass>>,
            exactlyNotatingSymbolClassSmallestSymbolSubsetIndices: [1, 5] as Array<Index<SymbolSubset>>,
        }
        expect(actual).toEqual(expected)
    })
})
