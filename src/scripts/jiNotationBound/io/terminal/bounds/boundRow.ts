import { formatInteger, formatNumber, Row } from "../../../../../general"
import { formatSymbolAscii } from "../../../../../sagittal"
import { JiNotationBoundAnalysis } from "../../../bound"
import { extractJiNotationBoundIdentifiers } from "../boundIdentifiers"
import { extractJiNotationLevelDistances } from "./levelDistances"
import { extractJiNotationLevelRanks } from "./levelRanks"
import { formatMina } from "./mina"
import { JiNotationBoundRowOptions } from "./types"

const computeJiNotationBoundRow = (
    jiNotationBoundAnalysis: JiNotationBoundAnalysis,
    { jiNotationBound }: JiNotationBoundRowOptions,
): Row<{ of: JiNotationBoundAnalysis }> => {
    let jiNotationBoundRow: Row<{ of: JiNotationBoundAnalysis }>
    const jiNotationBoundIdentifiers = extractJiNotationBoundIdentifiers(jiNotationBound)

    const {
        extremeLevelLesserBoundedSymbolClass,
        extremeLevelGreaterBoundedSymbolClass,
        cents,
        lesserBoundedMina,
        greaterBoundedMina,
    } = jiNotationBoundIdentifiers
    const {
        bestRank,
        bestPossibleHistory,
        initialPosition,
        initialPositionTinaDistance,
        bestPossibleHistoryTotalDistance,
        bestPossibleHistoryTotalInaDistance,
    } = jiNotationBoundAnalysis

    const [
        mediumLevelRank,
        highLevelRank,
        veryHighLevelRank,
        extremeLevelRank,
    ] = extractJiNotationLevelRanks(bestPossibleHistory)

    const [
        bestPossibleHistoryMediumDistance,
        bestPossibleHistoryHighDistance,
        bestPossibleHistoryUltraDistance,
        bestPossibleHistoryExtremeDistance,
    ] = extractJiNotationLevelDistances(bestPossibleHistory)

    const [
        bestPossibleHistoryMediumInaDistance,
        bestPossibleHistoryHighInaDistance,
        bestPossibleHistoryUltraInaDistance,
        bestPossibleHistoryExtremeInaDistance,
    ] = extractJiNotationLevelDistances(bestPossibleHistory, { ina: true })

    jiNotationBoundRow = [
        formatInteger(jiNotationBound.id),
        formatMina(lesserBoundedMina),
        formatMina(greaterBoundedMina),
        formatSymbolAscii(extremeLevelLesserBoundedSymbolClass),
        formatSymbolAscii(extremeLevelGreaterBoundedSymbolClass),
        mediumLevelRank,
        highLevelRank,
        veryHighLevelRank,
        extremeLevelRank,
        formatInteger(bestRank),
        bestPossibleHistoryMediumDistance,
        bestPossibleHistoryHighDistance,
        bestPossibleHistoryUltraDistance,
        bestPossibleHistoryExtremeDistance,
        formatNumber(bestPossibleHistoryTotalDistance),
        bestPossibleHistoryMediumInaDistance,
        bestPossibleHistoryHighInaDistance,
        bestPossibleHistoryUltraInaDistance,
        bestPossibleHistoryExtremeInaDistance,
        formatNumber(bestPossibleHistoryTotalInaDistance),
        formatNumber(cents),
        formatNumber(initialPosition),
        formatNumber(initialPositionTinaDistance),
    ] as Row as Row<{ of: JiNotationBoundAnalysis }>

    return jiNotationBoundRow
}

export {
    computeJiNotationBoundRow,
}
