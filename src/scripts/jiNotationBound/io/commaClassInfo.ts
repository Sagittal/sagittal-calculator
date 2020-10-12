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
    getSmallestSymbolSubset,
} from "../../../sagittal"
import { CommaClassInfo } from "./types"

const computeCommaClassInfo = (commaClassId: Id<CommaClass>): CommaClassInfo => {
    const commaClass = getCommaClass(commaClassId)
    const commaAnalysis = analyzeComma(commaClass)

    const symbol = getRepresentativeSymbol(commaClassId)
    const ascii = computeAsciiFromSymbol(symbol)
    const unicode = computeUnicodeFromSymbol(symbol)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)

    const minaName = getMinaName(commaClassId)

    const smallestSymbolSubset = getSmallestSymbolSubset(commaClassId)

    return {
        id: commaClassId,
        representativeSymbol: {
            ascii,
            unicode,
            smallestSymbolSubset,
        },
        minaName,
        introducingJiNotationLevel,
        commaAnalysis,
    }
}

export {
    computeCommaClassInfo,
}
