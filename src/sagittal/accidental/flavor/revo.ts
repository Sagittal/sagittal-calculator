import {CaptureZone, Section} from "../../notations"
import {getFlacco} from "../flacco"
import {apotomeShift, computeApotomeComplement, computeSagittalFromFlacco, flipSagittal} from "../symbol"
import {Accidental, Flavor} from "./types"

const computeRevoAccidentalFromCaptureZone = (captureZone: CaptureZone): Accidental<Flavor.REVO> => {
    const { flaccoId, section, shifted, negated } = captureZone

    const flacco = getFlacco(flaccoId)
    let sagittal = computeSagittalFromFlacco(flacco)
    sagittal = section === Section.C ? computeApotomeComplement(sagittal) : sagittal
    sagittal = shifted ? apotomeShift(sagittal) : sagittal
    sagittal = negated ? flipSagittal(sagittal) : sagittal

    return sagittal as Accidental<Flavor.REVO>
}

export {
    computeRevoAccidentalFromCaptureZone,
}
