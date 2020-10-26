import {Index} from "../../../general"
import {CommaClassId, FlaccoSubset} from "../../../sagittal"

interface NotatingCommaClassesProperties {
    notatingCommaClassSmallestFlaccoSubsetIndices: Array<Index<FlaccoSubset>>,
    notatingCommaClassIds: CommaClassId[],
}

export {
    NotatingCommaClassesProperties,
}
