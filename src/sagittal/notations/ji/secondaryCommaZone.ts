import { Id, Zone } from "../../../general"
import { PrimaryComma, SymbolClass } from "../types"
import { computeCaptureZone } from "./captureZone"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"

const computeSecondaryCommaZone = (symbolClassId: Id<SymbolClass>): Zone<PrimaryComma> => {
    return computeCaptureZone(
        symbolClassId,
        getIntroducingJiNotationLevel(symbolClassId),
    ) as Zone<PrimaryComma>
}

export {
    computeSecondaryCommaZone,
}
