import {Index} from "../../../general"
import {CommaClassId, SymbolSubset} from "../../../sagittal"

interface NotatingCommaClassesProperties {
    notatingCommaClassSmallestSymbolSubsetIndices: Array<Index<SymbolSubset>>,
    notatingCommaClassIds: CommaClassId[],
}

export {
    NotatingCommaClassesProperties,
}
