import { Id, Zone } from "../../../general"
import { SagittalComma, SymbolClass } from "../types"
import { computeCaptureZone } from "./captureZone"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"

const computeSecondaryCommaZone = (symbolClassId: Id<SymbolClass>): Zone<SagittalComma> => {
    return computeCaptureZone(
        symbolClassId,
        getIntroducingJiNotationLevel(symbolClassId),
    ) as Zone<SagittalComma>
}

export {
    computeSecondaryCommaZone,
}
