import {Id, isUndefined} from "../../../../general"
import {computeSagittalFromFlacco, Flacco, FLACCOS, Sagittal} from "../../../accidental"
import {getCommaClass} from "./get"
import {CommaClass} from "./types"

const getRepresentativeSagittal = (commaClassId: Id<CommaClass>): Sagittal => {
    const flaccoId = getCommaClass(commaClassId).representativeFlaccoId
    const flacco = FLACCOS.find((flacco: Flacco): boolean => flacco.id === flaccoId)

    if (isUndefined(flacco)) {
        throw new Error(`Could not find representative sagittal for comma class ID ${commaClassId}.`)
    }

    return computeSagittalFromFlacco(flacco)
}

export {
    getRepresentativeSagittal,
}
