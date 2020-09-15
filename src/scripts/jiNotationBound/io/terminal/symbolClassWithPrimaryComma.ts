import { Id } from "../../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    getJiNotationSymbolClass,
    getRepresentativeSymbol,
    getSagittalComma,
    SagittalComma,
    SymbolClass,
} from "../../../../sagittal"
import { JiNotationSymbolClassWithPrimaryCommaAndExtras } from "./types"

const getJiNotationSymbolClassWithPrimaryComma = (
    symbolClassId: Id<SymbolClass>
): JiNotationSymbolClassWithPrimaryCommaAndExtras => {
    const jiNotationSymbolClass = getJiNotationSymbolClass(symbolClassId)
    const { primaryCommaId, ...otherSymbolProperties } = jiNotationSymbolClass

    const primaryComma: SagittalComma = getSagittalComma(primaryCommaId)
    const primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> } =
        analyzeComma(primaryComma) as CommaAnalysis & { id: Id<SagittalComma> }

    const { ascii, unicode } = getRepresentativeSymbol(symbolClassId)

    return { ...otherSymbolProperties, ascii, unicode, primaryCommaAnalysis }
}

export {
    getJiNotationSymbolClassWithPrimaryComma,
}
