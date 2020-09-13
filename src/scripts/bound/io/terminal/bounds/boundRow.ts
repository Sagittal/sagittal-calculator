import { formatInteger, formatNumber, Row } from "../../../../../general"
import { formatSymbolAscii } from "../../../../../sagittal"
import { BoundAnalysis } from "../../../analyzeBound"
import { extractBoundIdentifiers } from "../boundIdentifiers"
import { extractLevelDistances } from "./levelDistances"
import { extractLevelRanks } from "./levelRanks"
import { formatMina } from "./mina"
import { BoundRowOptions } from "./types"

const computeBoundRow = (boundAnalysis: BoundAnalysis, { bound }: BoundRowOptions): Row<{ of: BoundAnalysis }> => {
    let boundRow: Row<{ of: BoundAnalysis }>
    const boundIdentifiers = extractBoundIdentifiers(bound)

    const {
        extremeLevelLesserBoundedSymbol,
        extremeLevelGreaterBoundedSymbol,
        cents,
        lesserBoundedMina,
        greaterBoundedMina,
    } = boundIdentifiers
    const {
        bestRank,
        bestPossibleHistory,
        initialPosition,
        initialPositionTinaDistance,
        bestPossibleHistoryTotalDistance,
        bestPossibleHistoryTotalInaDistance,
    } = boundAnalysis

    const [
        mediumLevelRank,
        highLevelRank,
        veryHighLevelRank,
        extremeLevelRank,
    ] = extractLevelRanks(bestPossibleHistory)

    const [
        bestPossibleHistoryMediumDistance,
        bestPossibleHistoryHighDistance,
        bestPossibleHistoryUltraDistance,
        bestPossibleHistoryExtremeDistance,
    ] = extractLevelDistances(bestPossibleHistory)

    const [
        bestPossibleHistoryMediumInaDistance,
        bestPossibleHistoryHighInaDistance,
        bestPossibleHistoryUltraInaDistance,
        bestPossibleHistoryExtremeInaDistance,
    ] = extractLevelDistances(bestPossibleHistory, { ina: true })

    boundRow = [
        formatInteger(bound.id),
        formatMina(lesserBoundedMina),
        formatMina(greaterBoundedMina),
        formatSymbolAscii(extremeLevelLesserBoundedSymbol),
        formatSymbolAscii(extremeLevelGreaterBoundedSymbol),
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
    ] as Row as Row<{ of: BoundAnalysis }>

    return boundRow
}

export {
    computeBoundRow,
}
