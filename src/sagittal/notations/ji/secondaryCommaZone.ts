import { Zone } from "../../../general"
import { SagittalComma } from "../types"
import { computeCaptureZone } from "./captureZone"
import { getIntroducingJiNotationLevel } from "./introducingJiNotationLevel"
import { JiNotationSymbolClass } from "./types"

const computeSecondaryCommaZone = (jiNotationSymbolClass: JiNotationSymbolClass): Zone<SagittalComma> => {
    return computeCaptureZone(
        jiNotationSymbolClass,
        getIntroducingJiNotationLevel(jiNotationSymbolClass.id)
    ) as Zone<SagittalComma>
}

export {
    computeSecondaryCommaZone,
}
