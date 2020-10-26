import {abs, subtractPitch} from "../../../../general"
import {
    analyzeComma,
    BoundClassId,
    CommaClassId,
    computeSagittalAscii,
    computeSagittalUnicode,
    getCommaClass,
    getIntroducingJiNotationLevel,
    getMinaName,
    getRepresentativeSagittal,
    getSmallestSymbolSubset,
    JiNotationLevel,
    JI_NOTATION_BOUND_CLASSES,
} from "../../../../sagittal"
import {computeInaDistance} from "../../history"
import {BoundedCommaClassInfo} from "./types"

const computeBoundedCommaClassInfo = (
    commaClassId: CommaClassId,
    boundClassId: BoundClassId,
    jiNotationLevel: JiNotationLevel,
): BoundedCommaClassInfo => {
    const commaClass = getCommaClass(commaClassId)
    const commaAnalysis = analyzeComma(commaClass.pitch)

    const sagittal = getRepresentativeSagittal(commaClassId)
    const ascii = computeSagittalAscii(sagittal)
    const unicode = computeSagittalUnicode(sagittal)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)

    const minaName = getMinaName(commaClassId)

    const smallestSymbolSubset = getSmallestSymbolSubset(commaClass.representativeSymbolClassId)

    const bound = JI_NOTATION_BOUND_CLASSES[boundClassId]

    const distance = abs(subtractPitch(bound.pitch, commaClass.pitch))
    const inaDistance = computeInaDistance(distance, jiNotationLevel)

    return {
        id: commaClassId,
        representativeSagittal: {
            ascii,
            unicode,
            smallestSymbolSubset,
        },
        minaName,
        introducingJiNotationLevel,
        commaAnalysis,
        distance,
        inaDistance,
    }
}

export {
    computeBoundedCommaClassInfo,
}
