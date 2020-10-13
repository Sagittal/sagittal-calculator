import { Id, isUndefined } from "../../general"
import { getCommaClass } from "./commaClass"
import { FLACCOS } from "./flaccos"
import { computeSymbolFromFlacco } from "./symbolFromFlacco"
import { CommaClass, Flacco, SagittalSymbol } from "./types"

const getRepresentativeSymbol = (commaClassId: Id<CommaClass>): SagittalSymbol => {
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
