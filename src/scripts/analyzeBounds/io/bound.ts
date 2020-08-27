import { formatNumber, Formatted } from "../../../general"
import { AnalyzedBound } from "../types"
import { alignFormattedNumber } from "./alignFormattedNumber"
import { extractBoundIdentifiers } from "./boundIdentifiers"
import { COLORS } from "./colors"
import { extractLevelDistances } from "./levelDistances"
import { extractLevelRanks } from "./levelRanks"
import { formatMina } from "./mina"
import { formatSymbolAscii } from "./symbolAscii"
import { AnalysisMode, FormatBoundParameters } from "./types"

const formatBound = (analyzedBound: AnalyzedBound, { bound, mode = AnalysisMode.DETAILS }: FormatBoundParameters): Formatted<AnalyzedBound> => {
    let formattedBound
    const boundIdentifiers = extractBoundIdentifiers(bound)

    if (mode === AnalysisMode.SUMMARY && bound) {
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

        const color = COLORS[ bestRank ]
        formattedBound = [
            bound.id,
            formatMina(lesserBoundedMina),
            formatMina(greaterBoundedMina),
            formatSymbolAscii(extremeLevelLesserBoundedSymbol),
            formatSymbolAscii(extremeLevelGreaterBoundedSymbol),
            mediumLevelRank,
            highLevelRank,
            veryHighLevelRank,
            extremeLevelRank,
            bestRank,
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
        ].join("\t")

        formattedBound = formattedBound[ color ]
    } else if (mode === "details") {
        formattedBound =
            JSON.stringify(boundIdentifiers, null, 4)
                .replace(/\\\\/g, "\\") +
            "\n" +
            JSON.stringify(analyzedBound, null, 4)
                .replace(/\\\\/g, "\\")
    }

    return formattedBound as Formatted<AnalyzedBound>
}

export {
    formatBound,
}
