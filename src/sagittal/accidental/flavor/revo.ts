import {isUndefined} from "@sagittal/general"
import {Section, SymbolClassId} from "../../notation"
import {apotomeShift, computeApotomeComplement, computeSagittalFromSymbolClassId, flipSagittal} from "../sagittal"
import {Accidental, Flavor} from "./types"

const computeRevoAccidentalFromCaptureZone = (
    symbolClassId: SymbolClassId,
    {negated, mirrored, shifted}: Section,
): Accidental<Flavor.REVO> => {
    let sagittal = computeSagittalFromSymbolClassId(symbolClassId)

    sagittal = mirrored ? computeApotomeComplement(sagittal) : sagittal
    sagittal = shifted ? apotomeShift(sagittal) : sagittal
    sagittal = negated ? flipSagittal(sagittal) : sagittal

    return isUndefined(sagittal) ? {} as Accidental<Flavor.REVO> : sagittal as Accidental<Flavor.REVO>
}

export {
    computeRevoAccidentalFromCaptureZone,
}
