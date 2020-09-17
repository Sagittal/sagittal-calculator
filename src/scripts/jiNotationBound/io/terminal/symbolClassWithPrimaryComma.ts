import { Id } from "../../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    computeIntroducingJiNotationLevel,
    getJiNotationSymbolClass,
    getRepresentativeSymbol,
    getSagittalComma,
    SagittalComma,
    SymbolClass,
} from "../../../../sagittal"
import { JiNotationSymbolClassWithPrimaryCommaAndExtras } from "./types"

// TODO: is this now an symbolClassAnalysis?
const getJiNotationSymbolClassWithPrimaryComma = (
    symbolClassId: Id<SymbolClass>
): JiNotationSymbolClassWithPrimaryCommaAndExtras => {
    const jiNotationSymbolClass = getJiNotationSymbolClass(symbolClassId)
    const { primaryCommaId, ...otherSymbolProperties } = jiNotationSymbolClass

    const primaryComma: SagittalComma = getSagittalComma(primaryCommaId)
    const primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> } =
        analyzeComma(primaryComma) as CommaAnalysis & { id: Id<SagittalComma> }

    const { ascii, unicode } = getRepresentativeSymbol(symbolClassId)

    // TODO: should this be more of a "get"?
    const introducingJiNotationLevel = computeIntroducingJiNotationLevel(symbolClassId)

    return { ...otherSymbolProperties, ascii, unicode, introducingJiNotationLevel, primaryCommaAnalysis }
}

export {
    getJiNotationSymbolClassWithPrimaryComma,
}
