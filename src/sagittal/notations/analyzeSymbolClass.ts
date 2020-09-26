import { Id } from "../../general"
import { analyzeComma } from "../ji"
import { getIntroducingJiNotationLevel, getMinaName } from "./ji"
import { getPrimaryComma } from "./primaryComma"
import { getRepresentativeSymbol } from "./representativeSymbol"
import { getSmallestSymbolSubset } from "./smallestSymbolSubset"
import { getSymbolClass } from "./symbolClass"
import { PrimaryComma, PrimaryCommaAnalysis, SymbolClass, SymbolClassAnalysis } from "./types"

const analyzeSymbolClass = (
    symbolClassId: Id<SymbolClass>,
): SymbolClassAnalysis => {
    const symbolClass = getSymbolClass(symbolClassId)
    const { primaryCommaId, ...otherSymbolClassProperties } = symbolClass

    const primaryComma: PrimaryComma = getPrimaryComma(symbolClassId)
    const primaryCommaAnalysis: PrimaryCommaAnalysis = analyzeComma(primaryComma) as PrimaryCommaAnalysis

    const { revoAscii, revoUnicode } = getRepresentativeSymbol(symbolClassId)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(symbolClassId)

    const minaName = getMinaName(symbolClassId)

    const smallestSymbolSubset = getSmallestSymbolSubset(symbolClassId)

    return {
        ...otherSymbolClassProperties,
        smallestSymbolSubset,
        minaName,
        ascii: revoAscii,
        unicode: revoUnicode,
        introducingJiNotationLevel,
        primaryCommaAnalysis,
    }
}

export {
    analyzeSymbolClass,
}
