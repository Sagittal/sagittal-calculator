import { Id } from "../../../../general"
import {
    analyzeComma,
    AnalyzedComma,
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
    const analyzedPrimaryComma: AnalyzedComma & { id: Id<SagittalComma> } =
        analyzeComma(primaryComma) as AnalyzedComma & { id: Id<SagittalComma> }

    return { ...otherSymbolProperties, primaryComma: analyzedPrimaryComma } // TODO: rename key to analyzedPrimaryComma
}

export {
    getJiSymbolWithPrimaryComma,
}
