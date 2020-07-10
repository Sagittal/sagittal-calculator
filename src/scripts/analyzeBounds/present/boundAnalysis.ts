import {COLORS} from "./colors"
import {presentNumber} from "./number"
import {presentSymbolAscii} from "./symbolAscii"
import {alignFormattedNumber} from "./alignFormattedNumber"
import {presentMina} from "./mina"
import {extractLevelRanks} from "./levelRanks"
import {extractLevelDistances} from "./levelDistances"
import {extractLevelInaDistances} from "./levelInaDistances"
import {extractBoundIdentifiers} from "./boundIdentifiers"

const presentBoundAnalysis = (boundAnalysis, {bound = undefined, mode = "DETAILS"}: any = {}) => {
    let presentedBoundAnalysis
    const boundIdentifiers = extractBoundIdentifiers(bound)

    if (mode === "SUMMARY") {
        const {
            extremeLevelLesserBoundedSymbol,
            extremeLevelGreaterBoundedSymbol,
            position,
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
        ] = extractLevelInaDistances(bestPossibleHistory)

        const color = COLORS[bestRank]
        presentedBoundAnalysis = [
            bound.id,
            presentMina(lesserBoundedMina),
            presentMina(greaterBoundedMina),
            presentSymbolAscii(extremeLevelLesserBoundedSymbol),
            presentSymbolAscii(extremeLevelGreaterBoundedSymbol),
            mediumLevelRank,
            highLevelRank,
            veryHighLevelRank,
            extremeLevelRank,
            bestRank,
            bestPossibleHistoryMediumDistance,
            bestPossibleHistoryHighDistance,
            bestPossibleHistoryUltraDistance,
            bestPossibleHistoryExtremeDistance,
            alignFormattedNumber(presentNumber(bestPossibleHistoryDistance)),
            bestPossibleHistoryMediumInaDistance,
            bestPossibleHistoryHighInaDistance,
            bestPossibleHistoryUltraInaDistance,
            bestPossibleHistoryExtremeInaDistance,
            alignFormattedNumber(presentNumber(bestPossibleHistoryInaDistance)),
            alignFormattedNumber(presentNumber(position)),
            alignFormattedNumber(presentNumber(initialPosition)),
            alignFormattedNumber(presentNumber(initialPositionTinaDifference)),
        ].join("\t")[color]
    } else if (mode === "DETAILS") {
        presentedBoundAnalysis =
            JSON.stringify(boundIdentifiers, null, 4)
                .replace(/\\\\/g, "\\") +
            "\n" +
            JSON.stringify(boundAnalysis, null, 4)
                .replace(/\\\\/g, "\\")
    }

    return presentedBoundAnalysis
}

export {
    presentBoundAnalysis,
}
