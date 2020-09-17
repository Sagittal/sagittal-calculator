import { Zone } from "../../../general"
import { SagittalComma } from "../types"
import { computeCaptureZone } from "./captureZone"
import { computeIntroducingJiNotationLevel } from "./introducingJiNotationLevel"
import { JiNotationSymbolClass } from "./types"

const computeSecondaryCommaZone = (jiNotationSymbolClass: JiNotationSymbolClass): Zone<SagittalComma> => {
    return computeCaptureZone(
        jiNotationSymbolClass,
        computeIntroducingJiNotationLevel(jiNotationSymbolClass.id)
    ) as Zone<SagittalComma>
}

export {
    computeSecondaryCommaZone,
}
