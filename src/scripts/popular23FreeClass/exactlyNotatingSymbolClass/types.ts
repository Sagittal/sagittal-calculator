import { Id, Index } from "../../../general"
import { SymbolClass, SymbolSubset } from "../../../sagittal"

interface ExactlyNotatingSymbolClassProperties {
    exactlyNotatingSymbolClassSmallestSymbolSubsetIndices: Array<Index<SymbolSubset>>,
    exactlyNotatingSymbolClassIds: Array<Id<SymbolClass>>,
}

export {
    ExactlyNotatingSymbolClassProperties,
}
