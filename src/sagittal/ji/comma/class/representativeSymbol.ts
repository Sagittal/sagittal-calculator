import {Id, isUndefined} from "../../../../general"
import {computeSymbolFromFlacco, Flacco, FLACCOS, Symbol} from "../../../accidental"
import {getCommaClass} from "./get"
import {CommaClass} from "./types"

const getRepresentativeSymbol = (commaClassId: Id<CommaClass>): Symbol => {
    const flaccoId = getCommaClass(commaClassId).representativeFlaccoId
    const flacco = FLACCOS.find((flacco: Flacco): boolean => flacco.id === flaccoId)

    if (isUndefined(flacco)) {
        throw new Error(`Could not find representative symbol for comma class ID ${commaClassId}.`)
    }

    return computeSymbolFromFlacco(flacco)
}

export {
    getRepresentativeSymbol,
}
