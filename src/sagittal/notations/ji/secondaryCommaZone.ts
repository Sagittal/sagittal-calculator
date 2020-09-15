import { Zone } from "../../../general"
import { SagittalComma } from "../types"
import { computeCaptureZone } from "./captureZone"
import { JiNotationSymbolClass } from "./types"

const computeSecondaryCommaZone = (jiNotationSymbolClass: JiNotationSymbolClass): Zone<SagittalComma> => {
    return computeCaptureZone(
        jiNotationSymbolClass,
        jiNotationSymbolClass.introducingJiNotationLevel
    ) as Zone<SagittalComma>
}

export {
    computeSecondaryCommaZone,
}
