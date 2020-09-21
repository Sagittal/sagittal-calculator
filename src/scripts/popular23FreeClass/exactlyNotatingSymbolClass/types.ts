import { Id, Index } from "../../../general"
import { SymbolClass, SymbolSubset } from "../../../sagittal"

interface ExactlyNotatingSymbolClassProperties {
    exactlyNotatingSymbolClassSmallestJiNotationSymbolSubsetIndices: Array<Index<SymbolSubset>>,
    exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>>,
}

export {
    ExactlyNotatingSymbolClassProperties,
}
