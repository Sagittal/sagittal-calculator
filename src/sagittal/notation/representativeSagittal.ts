import {computeSagittalFromFlacco, getFlacco, NullSagittal, Sagittal} from "../accidental"
import {getCommaClass} from "./commaClass"
import {CommaClassId} from "./types"

const getRepresentativeSagittal = (commaClassId: CommaClassId): NullSagittal | Sagittal => {
    const flaccoId = getCommaClass(commaClassId).representativeSymbolClassId
    const flacco = getFlacco(flaccoId)

    return computeSagittalFromFlacco(flacco)
}

export {
    getRepresentativeSagittal,
}
