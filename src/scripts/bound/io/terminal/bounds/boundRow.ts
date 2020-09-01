import { formatInteger, formatNumber, Row } from "../../../../../general"
import { formatSymbolAscii } from "../../../../../sagittal"
import { AnalyzedBound } from "../../../analyzeBound"
import { extractBoundIdentifiers } from "../boundIdentifiers"
import { alignFormattedNumber } from "./alignFormattedNumber"
import { extractLevelDistances } from "./levelDistances"
import { extractLevelRanks } from "./levelRanks"
import { formatMina } from "./mina"
import { ComputeBoundRowOptions } from "./types"

const computeBoundRow = (analyzedBound: AnalyzedBound, { bound }: ComputeBoundRowOptions): Row<AnalyzedBound> => {
    let boundRow: Row<AnalyzedBound>
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
    } = analyzedBound

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
        bound.id.toString(),
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
        // TODO: when would we want to format but not align?
        alignFormattedNumber(formatNumber(bestPossibleHistoryTotalDistance)),
        bestPossibleHistoryMediumInaDistance,
        bestPossibleHistoryHighInaDistance,
        bestPossibleHistoryUltraInaDistance,
        bestPossibleHistoryExtremeInaDistance,
        alignFormattedNumber(formatNumber(bestPossibleHistoryTotalInaDistance)),
        alignFormattedNumber(formatNumber(cents)),
        alignFormattedNumber(formatNumber(initialPosition)),
        alignFormattedNumber(formatNumber(initialPositionTinaDistance)),
    ] as Row<AnalyzedBound>

    return boundRow
}

export {
    computeBoundRow,
}
