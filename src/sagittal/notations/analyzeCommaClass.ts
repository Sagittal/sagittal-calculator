import { Id } from "../../general"
import { analyzeComma } from "../ji"
import { getCommaClass } from "./commaClass"
import { getIntroducingJiNotationLevel, getMinaName } from "./ji"
import { getPrimaryComma } from "./primaryComma"
import { getRepresentativeSymbol } from "./representativeSymbol"
import { getSmallestSymbolSubset } from "./smallestSymbolSubset"
import { CommaClass, CommaClassAnalysis } from "./types"

const analyzeCommaClass = (
    commaClassId: Id<CommaClass>,
): CommaClassAnalysis => {
    const commaClass = getCommaClass(commaClassId)
    const { primaryCommaId, ...otherCommaClassProperties } = commaClass

    const primaryComma = getPrimaryComma(commaClassId)
    const primaryCommaAnalysis = analyzeComma(primaryComma)

    const { revoAscii, revoUnicode } = getRepresentativeSymbol(commaClassId)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(commaClassId)

    const minaName = getMinaName(commaClassId)

    const smallestSymbolSubset = getSmallestSymbolSubset(commaClassId)

    return {
        ...otherCommaClassProperties,
        smallestSymbolSubset,
        minaName,
        ascii: revoAscii,
        unicode: revoUnicode,
        introducingJiNotationLevel,
        primaryCommaAnalysis,
    }
}

export {
    analyzeCommaClass,
}
