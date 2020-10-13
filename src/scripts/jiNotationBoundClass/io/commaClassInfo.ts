import { Id } from "../../../general"
import {
    analyzeComma,
    CommaClass,
    computeAsciiFromSymbol,
    computeUnicodeFromSymbol,
    getCommaClass,
    getIntroducingJiNotationLevel,
    getMinaName,
    getRepresentativeSymbol,
    getSmallestFlaccoSubset,
} from "../../../sagittal"
import { CommaClassInfo } from "./types"

const computeCommaClassInfo = (commaClassId: Id<CommaClass>): CommaClassInfo => {
    const commaClass = getCommaClass(commaClassId)
    const commaAnalysis = analyzeComma(commaClass.pitch)

    const symbol = getRepresentativeSymbol(commaClassId)
    const ascii = computeAsciiFromSymbol(symbol)
    const unicode = computeUnicodeFromSymbol(symbol)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)

    const minaName = getMinaName(commaClassId)

    const smallestFlaccoSubset = getSmallestFlaccoSubset(commaClass.representativeFlaccoId)

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
    }
}

export {
    computeCommaClassInfo,
}
