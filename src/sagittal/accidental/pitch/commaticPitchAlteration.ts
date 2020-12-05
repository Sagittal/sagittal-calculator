import {invertScamon, Scamon} from "@sagittal/general"
import {getCommaClass, getSymbolClass, Section, SymbolClassId} from "../../notation"

const computeCommaticPitchAlterationFromSymbolClassIdAndSection = (
    [symbolClassId, section]: [SymbolClassId, Section],
): Scamon<{rational: true}> => {
    const symbolClass = getSymbolClass(symbolClassId)
    const commaClass = getCommaClass(symbolClass.commaClassId)
    const pitch = commaClass.pitch

    return section.mirrored ?
        section.negated ? pitch : invertScamon(pitch) as Scamon<{rational: true}> :
        section.negated ? invertScamon(pitch) as Scamon<{rational: true}> : pitch
}

export {
    computeCommaticPitchAlterationFromSymbolClassIdAndSection,
}
