import { Id } from "../../general"
import { analyzeComma, CommaAnalysis } from "../comma"
import { getSagittalComma } from "./getSagittalComma"
import { getIntroducingJiNotationLevel, getMina } from "./ji"
import { getRepresentativeSymbol } from "./representativeSymbol"
import { getSymbolClass } from "./symbolClass"
import { SagittalComma, SymbolClass, SymbolClassAnalysis } from "./types"

// TODO: it'd be good if you renamed files that do "analyze" to end with "analysis"
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
    
    const mina = getMina(symbolClassId)

    return { ...otherSymbolClassProperties, mina, ascii, unicode, introducingJiNotationLevel, primaryCommaAnalysis }
}

export {
    analyzeSymbolClass,
}
