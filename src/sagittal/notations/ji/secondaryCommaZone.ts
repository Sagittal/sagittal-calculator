import { Zone } from "../../../general"
import { SagittalComma } from "../types"
import { computeCaptureZone } from "./captureZone"
import { JiSymbol } from "./types"

const computeSecondaryCommaZone = (jiSymbol: JiSymbol): Zone<SagittalComma> => {
    return computeCaptureZone(jiSymbol, jiSymbol.introducingLevel) as Zone<SagittalComma>
}

export {
    computeSecondaryCommaZone,
}
