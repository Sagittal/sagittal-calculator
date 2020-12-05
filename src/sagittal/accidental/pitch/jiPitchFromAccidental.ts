import {isUndefined, Scamon, sumRationalScamons, UNISON} from "@sagittal/general"
import {Accidental} from "../flavor"
import {computeApotomicPitchAlterationFromSection} from "./apotomicPitchAlteration"
import {computeCommaticPitchAlterationFromSymbolClassIdAndSection} from "./commaticPitchAlteration"
import {computePitchAlterationFromCompatible} from "./compatiblePitchAlteration"
import {computeSymbolClassIdAndSectionFromSagittal} from "./symbolClassIdAndSectionFromSagittal"

const computeJiPitchFromAccidental = (accidental: Accidental): Scamon<{rational: true}> => {
    if (isUndefined(accidental)) return UNISON

    const {compatible, ...sagittal} = accidental

    const [symbolClassId, section] = computeSymbolClassIdAndSectionFromSagittal(sagittal)

    const pitchAlterations = [
        computeCommaticPitchAlterationFromSymbolClassIdAndSection([symbolClassId, section]),
    ] as Array<Scamon<{rational: true}>>

    const apotomePitchAlteration = computeApotomicPitchAlterationFromSection(section)
    if (!isUndefined(apotomePitchAlteration)) {
        pitchAlterations.push(apotomePitchAlteration)
    }

    if (!isUndefined(compatible)) {
        pitchAlterations.push(computePitchAlterationFromCompatible(compatible))
    }

    return sumRationalScamons(...pitchAlterations)
}

export {
    computeJiPitchFromAccidental,
}
