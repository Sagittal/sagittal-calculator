import {increment, isUndefined, Maybe, negative} from "@sagittal/general"
import {Section, SymbolClassId} from "../../notation"
import {computeApotomeComplement, computeSagittalFromSymbolClassId, flipSagittal, Shafts} from "../sagittal"
import {Accidental, Compatible, Flavor} from "./types"

const computeEvoAccidentalFromCaptureZone = (
    symbolClassId: SymbolClassId,
    {negated, mirrored, shifted}: Section,
): Accidental<Flavor.EVO> => {
    let sagittal = computeSagittalFromSymbolClassId(symbolClassId)

    let apotomeCount = 0
    if (mirrored) {
        const apotomeComplement = computeApotomeComplement(sagittal)
        if (!isUndefined(apotomeComplement) && apotomeComplement.shafts === Shafts.DOUBLE) {
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
