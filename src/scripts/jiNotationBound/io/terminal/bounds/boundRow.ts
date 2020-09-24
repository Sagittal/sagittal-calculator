import { formatDecimal, formatInteger, Row } from "../../../../../general"
import { formatSymbolAscii } from "../../../../../sagittal"
import { JiNotationBoundAnalysis } from "../../../bound"
import { extractJiNotationBoundIdentifiers } from "../boundIdentifiers"
import { extractJiNotationLevelDistances } from "./levelDistances"
import { extractJiNotationLevelRanks } from "./levelRanks"
import { formatMinaName } from "./minaName"
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
        lesserBoundedMinaName,
        greaterBoundedMinaName,
    } = jiNotationBoundIdentifiers
    const {
        bestRank,
        bestPossibleBoundHistoryAnalysis,
        initialPosition,
        initialPositionTinaDistance,
        bestPossibleBoundHistoryTotalDistance,
        bestPossibleBoundHistoryTotalInaDistance,
    } = jiNotationBoundAnalysis

    const [
        mediumLevelRank,
        highLevelRank,
        veryHighLevelRank,
        extremeLevelRank,
    ] = extractJiNotationLevelRanks(bestPossibleBoundHistoryAnalysis)

    const [
        bestPossibleBoundHistoryMediumDistance,
        bestPossibleBoundHistoryHighDistance,
        bestPossibleBoundHistoryUltraDistance,
        bestPossibleBoundHistoryExtremeDistance,
    ] = extractJiNotationLevelDistances(bestPossibleBoundHistoryAnalysis)

    const [
        bestPossibleBoundHistoryMediumInaDistance,
        bestPossibleBoundHistoryHighInaDistance,
        bestPossibleBoundHistoryUltraInaDistance,
        bestPossibleBoundHistoryExtremeInaDistance,
    ] = extractJiNotationLevelDistances(bestPossibleBoundHistoryAnalysis, { ina: true })

    jiNotationBoundRow = [
        formatInteger(jiNotationBound.id),
        formatMinaName(lesserBoundedMinaName),
        formatMinaName(greaterBoundedMinaName),
        formatSymbolAscii(extremeLevelLesserBoundedSymbolClass),
        formatSymbolAscii(extremeLevelGreaterBoundedSymbolClass),
        mediumLevelRank,
        highLevelRank,
        veryHighLevelRank,
        extremeLevelRank,
        formatInteger(bestRank),
        bestPossibleBoundHistoryMediumDistance,
        bestPossibleBoundHistoryHighDistance,
        bestPossibleBoundHistoryUltraDistance,
        bestPossibleBoundHistoryExtremeDistance,
        formatDecimal(bestPossibleBoundHistoryTotalDistance),
        bestPossibleBoundHistoryMediumInaDistance,
        bestPossibleBoundHistoryHighInaDistance,
        bestPossibleBoundHistoryUltraInaDistance,
        bestPossibleBoundHistoryExtremeInaDistance,
        formatDecimal(bestPossibleBoundHistoryTotalInaDistance), // these are cents but b/c the header
        formatDecimal(cents),                                    // specifically states they are cents
        formatDecimal(initialPosition),                          // and this is a really dense table
        formatDecimal(initialPositionTinaDistance),              // we're saving space and no ¢ symbols
    ] as Row as Row<{ of: JiNotationBoundAnalysis }>

    return jiNotationBoundRow
}

export {
    computeJiNotationBoundRow,
}
