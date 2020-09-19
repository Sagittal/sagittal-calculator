import { Id } from "../../general"
import { analyzeComma, CommaAnalysis } from "../ji"
import { getSagittalComma } from "./getSagittalComma"
import { getIntroducingJiNotationLevel, getMinaName } from "./ji"
import { getRepresentativeSymbol } from "./representativeSymbol"
import { getSmallestSymbolSubset } from "./smallestSymbolSubset"
import { getSymbolClass } from "./symbolClass"
import { SagittalComma, SymbolClass, SymbolClassAnalysis } from "./types"

const analyzeSymbolClass = (
    symbolClassId: Id<SymbolClass>,
): SymbolClassAnalysis => {
    const symbolClass = getSymbolClass(symbolClassId)
    const { primaryCommaId, ...otherSymbolClassProperties } = symbolClass

    const primaryComma: SagittalComma = getSagittalComma(primaryCommaId)
    const primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> } =
        analyzeComma(primaryComma) as CommaAnalysis & { id: Id<SagittalComma> }

    const { ascii, unicode } = getRepresentativeSymbol(symbolClassId)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(symbolClassId)

    const minaName = getMinaName(symbolClassId)

    const smallestSymbolSubset = getSmallestSymbolSubset(symbolClassId)

    return {
        ...otherSymbolClassProperties,
        smallestSymbolSubset,
        minaName,
        ascii,
        unicode,
        introducingJiNotationLevel,
        primaryCommaAnalysis,
    }
}

export {
    analyzeSymbolClass,
}
