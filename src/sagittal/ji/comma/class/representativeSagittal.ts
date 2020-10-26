import {isUndefined} from "../../../../general"
import {computeSagittalFromFlacco, getFlacco, Sagittal} from "../../../accidental"
import {getCommaClass} from "./class"
import {CommaClassId} from "./types"

const getRepresentativeSagittal = (commaClassId: CommaClassId): Sagittal => {
    const flaccoId = getCommaClass(commaClassId).representativeFlaccoId
    const flacco = getFlacco(flaccoId)

    if (isUndefined(flacco)) {
        throw new Error(`Could not find representative sagittal for comma class ID ${commaClassId}.`)
    }

    return computeSagittalFromFlacco(flacco)
}

export {
    getRepresentativeSagittal,
}
