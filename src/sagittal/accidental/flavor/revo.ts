import {getSymbolClass, Section, SymbolClassId} from "../../notation"
import {getFlacco} from "../flacco"
import {apotomeShift, computeApotomeComplement, computeSagittalFromFlacco, flipSagittal} from "../sagittal"
import {Accidental, Flavor} from "./types"

const computeRevoAccidentalFromCaptureZone = (
    symbolClassId: SymbolClassId,
    {negated, mirrored, shifted}: Section,
): Accidental<Flavor.REVO> => {
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
