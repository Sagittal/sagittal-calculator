import {abs, Id, isUndefined, subtractPitch} from "../../../../general"
import {
    analyzeComma,
    BoundClass,
    CommaClass,
    computeSymbolAscii,
    computeSymbolUnicode,
    getCommaClass,
    getIntroducingJiNotationLevel,
    getMinaName,
    getRepresentativeSymbol,
    getSmallestFlaccoSubset,
    JiNotationBoundClass,
    JiNotationLevel, JI_NOTATION_BOUND_CLASSES,
} from "../../../../sagittal"
import {computeInaDistance} from "../../history"
import {BoundedCommaClassInfo} from "./types"

const computeBoundedCommaClassInfo = (
    commaClassId: Id<CommaClass>,
    boundClassId: Id<BoundClass>,
    jiNotationLevel: JiNotationLevel,
): BoundedCommaClassInfo => {
    const commaClass = getCommaClass(commaClassId)
    const commaAnalysis = analyzeComma(commaClass.pitch)

    const symbol = getRepresentativeSymbol(commaClassId)
    const ascii = computeSymbolAscii(symbol)
    const unicode = computeSymbolUnicode(symbol)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)

    const minaName = getMinaName(commaClassId)

    const smallestFlaccoSubset = getSmallestFlaccoSubset(commaClass.representativeFlaccoId)

    const bound = JI_NOTATION_BOUND_CLASSES.find((jiNotationBoundClass: JiNotationBoundClass): boolean => {
        return jiNotationBoundClass.id === boundClassId
    })
    if (isUndefined(bound)) throw new Error(`JI notation bound class with ID ${boundClassId} not found.`)
    const distance = abs(subtractPitch(bound.pitch, commaClass.pitch))
    const inaDistance = computeInaDistance(distance, jiNotationLevel)

    return {
        id: commaClassId,
        representativeSymbol: {
            ascii,
            unicode,
            smallestFlaccoSubset,
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
