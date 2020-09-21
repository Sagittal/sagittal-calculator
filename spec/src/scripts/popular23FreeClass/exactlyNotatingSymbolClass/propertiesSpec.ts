import { Id, Index } from "../../../../../src/general"
import { TwoThreeFreeClass } from "../../../../../src/general/music/ji"
import { SymbolClass, SymbolSubset } from "../../../../../src/sagittal/notations"
import {
    computeExactlyNotatingSymbolClassProperties,
    ExactlyNotatingSymbolClassProperties,
} from "../../../../../src/scripts/popular23FreeClass/exactlyNotatingSymbolClass"

describe("computeExactlyNotatingSymbolClassProperties", (): void => {
    it("returns, for the given 2,3-free class, all exactly notating symbol class's IDs (if any), as well as the corresponding list of indices of the smallest symbol subsets these symbol classes appear in", (): void => {
        const twoThreeFreeClass = { monzo: [0, 0, -1, 1] } as TwoThreeFreeClass

        const actual = computeExactlyNotatingSymbolClassProperties(twoThreeFreeClass)

        const expected: ExactlyNotatingSymbolClassProperties = {
            exactlyNotatingSymbolClassIds: [12, 62] as Array<Id<SymbolClass>>,
            exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices: [1, 5] as Array<Index<SymbolSubset>>,
        }
        expect(actual).toEqual(expected)
    })
})
