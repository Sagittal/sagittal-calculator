import {Index} from "../../../general"
import {SymbolClassId, SymbolSubsetId} from "../../../sagittal"

interface NotatingSymbolClassesProperties {
    notatingSymbolClassSmallestSymbolSubsetIndices: Array<Index<SymbolSubsetId>>,
    notatingSymbolClassIds: SymbolClassId[],
}

export {
    NotatingSymbolClassesProperties,
}
