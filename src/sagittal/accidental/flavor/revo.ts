import {CaptureZone, getSymbolClass} from "../../notation"
import {getFlacco} from "../flacco"
import {apotomeShift, computeApotomeComplement, computeSagittalFromFlacco, flipSagittal} from "../sagittal"
import {Accidental, Flavor} from "./types"

const computeRevoAccidentalFromCaptureZone = (captureZone: CaptureZone): Accidental<Flavor.REVO> => {
    const {symbolClassId, section: {shifted, mirrored, negated}} = captureZone

    const symbolClass = getSymbolClass(symbolClassId)
    const flacco = getFlacco(symbolClass.flaccoId)
    let sagittal = computeSagittalFromFlacco(flacco)
    sagittal = mirrored ? computeApotomeComplement(sagittal) : sagittal
    sagittal = shifted ? apotomeShift(sagittal) : sagittal
    sagittal = negated ? flipSagittal(sagittal) : sagittal

    return sagittal as Accidental<Flavor.REVO>
}

export {
    computeRevoAccidentalFromCaptureZone,
}
