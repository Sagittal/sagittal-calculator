import {Maybe} from "@sagittal/general"
import {computeSagittalFromFlacco, getFlacco, Sagittal} from "../accidental"
import {getCommaClass} from "./commaClass"
import {CommaClassId} from "./types"

const getRepresentativeSagittal = (commaClassId: CommaClassId): Maybe<Sagittal> => {
    const flaccoId = getCommaClass(commaClassId).representativeSymbolClassId
    const flacco = getFlacco(flaccoId)

    return computeSagittalFromFlacco(flacco)
}

export {
    getRepresentativeSagittal,
}
