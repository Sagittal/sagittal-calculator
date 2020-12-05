import {abs, subtractPitch} from "@sagittal/general"
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
    getSmallestSymbolSubsetId,
    JiNotationLevelId,
    JI_NOTATION_BOUND_CLASSES,
} from "@sagittal/system"
import {computeInaDistance} from "../../history"
import {BoundedCommaClassInfo} from "./types"

const computeBoundedCommaClassInfo = (
    commaClassId: CommaClassId,
    boundClassId: BoundClassId,
    jiNotationLevel: JiNotationLevelId,
): BoundedCommaClassInfo => {
    const commaClass = getCommaClass(commaClassId)
    const commaAnalysis = analyzeComma(commaClass.pitch)

    const sagittal = getRepresentativeSagittal(commaClassId)
    const ascii = computeSagittalAscii(sagittal)
    const unicode = computeSagittalUnicode(sagittal)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)

    const minaName = getMinaName(commaClassId)

    const smallestSymbolSubsetId = getSmallestSymbolSubsetId(commaClass.representativeSymbolClassId)

    const bound = JI_NOTATION_BOUND_CLASSES[boundClassId]

    const distance = abs(subtractPitch(bound.pitch, commaClass.pitch))
    const inaDistance = computeInaDistance(distance, jiNotationLevel)

    return {
        id: commaClassId,
        representativeSagittal: {
            ascii,
            unicode,
            smallestSymbolSubsetId,
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
