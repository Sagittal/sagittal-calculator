import {increment, isUndefined, Maybe, negative} from "../../../general"
import {CaptureZone, getSymbolClass} from "../../notation"
import {getFlacco} from "../flacco"
import {computeApotomeComplement, computeSagittalFromFlacco, flipSagittal, Shafts} from "../sagittal"
import {Accidental, Compatible, Flavor} from "./types"

// TODO: perhaps these should just be called with the symbolClassId and the section.
const computeEvoAccidentalFromCaptureZone = (captureZone: CaptureZone): Accidental<Flavor.EVO> => {
    const {symbolClassId, section: {negated, mirrored, shifted}} = captureZone

    const symbolClass = getSymbolClass(symbolClassId)
    const flacco = getFlacco(symbolClass.flaccoId)
    let sagittal = computeSagittalFromFlacco(flacco)

    let apotomeCount = 0
    if (mirrored) {
        const apotomeComplement = computeApotomeComplement(sagittal)
        if (apotomeComplement.shafts === Shafts.DOUBLE) {
            sagittal = flipSagittal(sagittal)
            apotomeCount = increment(apotomeCount)
        } else {
            sagittal = apotomeComplement
        }
    }
    if (shifted) apotomeCount = increment(apotomeCount)
    if (negated) {
        apotomeCount = negative(apotomeCount)
        sagittal = flipSagittal(sagittal)
    }
    const compatible: Maybe<Compatible> =
        apotomeCount === 1 ?
            Compatible.SHARP :
            apotomeCount === 2 ?
                Compatible.DOUBLE_SHARP :
                apotomeCount === -1 ?
                    Compatible.FLAT :
                    apotomeCount === -2 ?
                        Compatible.DOUBLE_FLAT :
                        undefined

    if (isUndefined(compatible)) {
        return {...sagittal} as Accidental<Flavor.EVO>
    }

    return {...sagittal, compatible} as Accidental<Flavor.EVO>
}

export {
    computeEvoAccidentalFromCaptureZone,
}
