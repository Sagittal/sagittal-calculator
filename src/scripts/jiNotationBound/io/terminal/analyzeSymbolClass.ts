import { Id } from "../../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    getIntroducingJiNotationLevel,
    getJiNotationSymbolClass,
    getRepresentativeSymbol,
    getSagittalComma,
    SagittalComma,
    SymbolClass,
} from "../../../../sagittal"
import { JiNotationSymbolClassAnalysis } from "./types"

// TODO: is this now an symbolClassAnalysis?
const analyzeJiNotationSymbolClass = (
    symbolClassId: Id<SymbolClass>
): JiNotationSymbolClassAnalysis => {
    const jiNotationSymbolClass = getJiNotationSymbolClass(symbolClassId)
    const { primaryCommaId, ...otherSymbolProperties } = jiNotationSymbolClass

    const primaryComma: SagittalComma = getSagittalComma(primaryCommaId)
    const primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> } =
        analyzeComma(primaryComma) as CommaAnalysis & { id: Id<SagittalComma> }

    const { ascii, unicode } = getRepresentativeSymbol(symbolClassId)

    const introducingJiNotationLevel = getIntroducingJiNotationLevel(symbolClassId)

    return { ...otherSymbolProperties, ascii, unicode, introducingJiNotationLevel, primaryCommaAnalysis }
}

export {
    analyzeJiNotationSymbolClass,
}
