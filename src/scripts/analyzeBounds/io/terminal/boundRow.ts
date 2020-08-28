import { formatNumber, Row } from "../../../../general"
import { AnalyzedBound } from "../../types"
import { alignFormattedNumber } from "./alignFormattedNumber"
import { extractBoundIdentifiers } from "./boundIdentifiers"
import { extractLevelDistances } from "./levelDistances"
import { extractLevelRanks } from "./levelRanks"
import { formatMina } from "./mina"
import { formatSymbolAscii } from "./symbolAscii"
import { FormatBoundParameters } from "./types"

const computeBoundRow = (analyzedBound: AnalyzedBound, { bound }: FormatBoundParameters): Row => {
    let boundRow: Row
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
        initialPositionTinaDifference,
        bestPossibleHistoryDistance,
        bestPossibleHistoryInaDistance,
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
        mediumLevelRank.toString(),
        highLevelRank.toString(),
        veryHighLevelRank.toString(),
        extremeLevelRank.toString(),
        bestRank.toString(),
        bestPossibleHistoryMediumDistance,
        bestPossibleHistoryHighDistance,
        bestPossibleHistoryUltraDistance,
        bestPossibleHistoryExtremeDistance,
        alignFormattedNumber(formatNumber(bestPossibleHistoryDistance)),
        bestPossibleHistoryMediumInaDistance,
        bestPossibleHistoryHighInaDistance,
        bestPossibleHistoryUltraInaDistance,
        bestPossibleHistoryExtremeInaDistance,
        alignFormattedNumber(formatNumber(bestPossibleHistoryInaDistance)),
        alignFormattedNumber(formatNumber(cents)),
        alignFormattedNumber(formatNumber(initialPosition)),
        alignFormattedNumber(formatNumber(initialPositionTinaDifference)),
    ] as Row

    return boundRow
}

export {
    computeBoundRow,
}
