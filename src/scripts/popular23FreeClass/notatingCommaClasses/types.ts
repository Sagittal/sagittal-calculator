import { Id, Index } from "../../../general"
import { CommaClass, SymbolSubset } from "../../../sagittal"

interface NotatingCommaClassesProperties {
    notatingCommaClassSmallestSymbolSubsetIndices: Array<Index<SymbolSubset>>,
    notatingCommaClassIds: Array<Id<CommaClass>>,
}

export {
    NotatingCommaClassesProperties,
}
