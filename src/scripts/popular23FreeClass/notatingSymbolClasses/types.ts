import {Index} from "@sagittal/general"
import {SymbolClassId, SymbolSubsetId} from "@sagittal/system"

interface NotatingSymbolClassesProperties {
    notatingSymbolClassSmallestSymbolSubsetIndices: Array<Index<SymbolSubsetId>>,
    notatingSymbolClassIds: SymbolClassId[],
}

export {
    NotatingSymbolClassesProperties,
}
