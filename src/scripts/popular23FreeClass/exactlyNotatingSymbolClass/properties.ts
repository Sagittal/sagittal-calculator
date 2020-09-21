import { Id, Index, NOT_FOUND, TwoThreeFreeClass } from "../../../general"
import { getSmallestSymbolSubset, JI_NOTATION_SYMBOL_SUBSETS, SymbolClass, SymbolSubset } from "../../../sagittal"
import { computeExactlyNotatingSymbolClassIds } from "./exactlyNotatingSymbolClassIds"
import { ExactlyNotatingSymbolClassProperties } from "./types"

const computeExactlyNotatingSymbolClassProperties = (
    twoThreeFreeClass: TwoThreeFreeClass,
): ExactlyNotatingSymbolClassProperties => {
    const exactlyNotatingSymbolClassIds = computeExactlyNotatingSymbolClassIds(twoThreeFreeClass)

    const smallestJiNotationSymbolSubsetIndices = exactlyNotatingSymbolClassIds
        .map((symbolClassId: Id<SymbolClass>): Index<SymbolSubset> => {
            let symbolSubsetIndex = JI_NOTATION_SYMBOL_SUBSETS.indexOf(getSmallestSymbolSubset(symbolClassId))

            // the smallest symbol subset method will include Trojan, but for these purposes
            // we only care about the smallest subset in the JI notation hierarchy
            // TODO: but then is it truly an Index<SymbolSubset>? it seems like it should be more accurately an
            //  Index<JiNotationSymbolSubset>. I'll check with Dave but maybe we should have included Trojan after all
            //  or figure out why he cared about symbol subset more than precision level.
            symbolSubsetIndex = symbolSubsetIndex === NOT_FOUND ?
                JI_NOTATION_SYMBOL_SUBSETS.indexOf(SymbolSubset.PROMETHEAN) :
                symbolSubsetIndex

            return symbolSubsetIndex as Index<SymbolSubset>
        })

    return {
        exactlyNotatingSymbolClassIds,
        exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices: smallestJiNotationSymbolSubsetIndices,
    }
}

export {
    computeExactlyNotatingSymbolClassProperties,
}
