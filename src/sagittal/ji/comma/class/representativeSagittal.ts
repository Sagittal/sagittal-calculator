import {computeSagittalFromFlacco, getFlacco, Sagittal} from "../../../accidental"
import {getCommaClass} from "./class"
import {CommaClassId} from "./types"

const getRepresentativeSagittal = (commaClassId: CommaClassId): Sagittal => {
    const flaccoId = getCommaClass(commaClassId).representativeFlaccoId
    const flacco = getFlacco(flaccoId)

    return computeSagittalFromFlacco(flacco)
}

export {
    getRepresentativeSagittal,
}
