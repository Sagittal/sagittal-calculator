import {Id, Index} from "../../../general"
import {CommaClass, FlaccoSubset} from "../../../sagittal"

interface NotatingCommaClassesProperties {
    notatingCommaClassSmallestFlaccoSubsetIndices: Array<Index<FlaccoSubset>>,
    notatingCommaClassIds: Array<Id<CommaClass>>,
}

export {
    NotatingCommaClassesProperties,
}
