import { Id } from "../../../../general"
import {
    analyzeComma,
    CommaAnalysis,
    getJiSymbol,
    getSagittalComma,
    JiSymbol,
    SagittalComma,
} from "../../../../sagittal"
import { JiSymbolWithPrimaryComma } from "./types"

const getJiSymbolWithPrimaryComma = (jiSymbolId: Id<JiSymbol>): JiSymbolWithPrimaryComma => {
    const jiSymbol = getJiSymbol(jiSymbolId)
    const { primaryCommaId, ...otherSymbolProperties } = jiSymbol

    const primaryComma: SagittalComma = getSagittalComma(primaryCommaId)
    const primaryCommaAnalysis: CommaAnalysis & { id: Id<SagittalComma> } =
        analyzeComma(primaryComma) as CommaAnalysis & { id: Id<SagittalComma> }

    return { ...otherSymbolProperties, primaryCommaAnalysis }
}

export {
    getJiSymbolWithPrimaryComma,
}
