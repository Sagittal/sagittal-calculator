import {Index} from "../../../general"
import {CommaClassId, SymbolSubsetId} from "../../../sagittal"

interface NotatingCommaClassesProperties {
    notatingCommaClassSmallestSymbolSubsetIndices: Array<Index<SymbolSubsetId>>,
    notatingCommaClassIds: CommaClassId[],
}

export {
    NotatingCommaClassesProperties,
}
