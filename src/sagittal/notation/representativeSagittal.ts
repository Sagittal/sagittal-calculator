import {computeSagittalFromFlacco, getFlacco, NullSagittal, Sagittal} from "../accidental"
import {getCommaClass} from "./commaClass"
import {CommaClassId} from "./types"

// TODO: IMPROVE NULL SAGITTAL SITUATION
//  We might want a friendlier situation than calling things "sagittal" whether or not they are Sagittal or
//  NullSagittal | Sagittal
const getRepresentativeSagittal = (commaClassId: CommaClassId): NullSagittal | Sagittal => {
    const flaccoId = getCommaClass(commaClassId).representativeSymbolClassId
    const flacco = getFlacco(flaccoId)

    return computeSagittalFromFlacco(flacco)
}

export {
    getRepresentativeSagittal,
}
