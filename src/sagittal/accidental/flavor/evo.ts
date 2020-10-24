import {increment, Maybe, negative} from "../../../general"
import {CaptureZone, Section} from "../../notations"
import {getFlacco} from "../flacco"
import {computeSagittalFromFlacco, flipSagittal} from "../symbol"
import {Accidental, Compatible, Flavor} from "./types"

const computeEvoAccidentalFromCaptureZone = (captureZone: CaptureZone): Accidental<Flavor.EVO> => {
    const { flaccoId, section, shifted, negated } = captureZone

    const flacco = getFlacco(flaccoId)
    let sagittal = computeSagittalFromFlacco(flacco)
    sagittal = section === Section.C ? flipSagittal(sagittal) : sagittal

    let apotomeCount = 0
    if (section === Section.C) apotomeCount = increment(apotomeCount)
    if (shifted) apotomeCount = increment(apotomeCount)
    if (negated) apotomeCount = negative(apotomeCount)
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

    return {...sagittal, compatible} as Accidental<Flavor.EVO>
}

export {
    computeEvoAccidentalFromCaptureZone,
}
