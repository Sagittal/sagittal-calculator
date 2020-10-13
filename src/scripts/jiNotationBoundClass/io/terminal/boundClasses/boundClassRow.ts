import { computeCentsFromPitch, formatDecimal, formatIntegerDecimal, Row } from "../../../../../general"
import { formatAscii } from "../../../../../sagittal"
import { JiNotationBoundClassAnalysis } from "../../../boundClass"
import { extractJiNotationBoundClassIdentifiers } from "../boundClassIdentifiers"
import { extractJiNotationLevelDistances } from "./levelDistances"
import { extractJiNotationLevelRanks } from "./levelRanks"
import { formatMinaName } from "./minaName"
import { JiNotationBoundClassRowOptions } from "./types"

const computeJiNotationBoundClassRow = (
    jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis,
    { jiNotationBoundClass }: JiNotationBoundClassRowOptions,
): Row<{ of: JiNotationBoundClassAnalysis }> => {
    let jiNotationBoundClassRow: Row<{ of: JiNotationBoundClassAnalysis }>
    const jiNotationBoundClassIdentifiers = extractJiNotationBoundClassIdentifiers(jiNotationBoundClass)

    const {
        extremeLevelLesserBoundedCommaClass,
        extremeLevelGreaterBoundedCommaClass,
        cents,
        lesserBoundedMinaName,
        greaterBoundedMinaName,
    } = jiNotationBoundClassIdentifiers
    const {
        bestRank,
        bestPossibleBoundClassHistoryAnalysis,
        initialPosition,
        initialPositionTinaDistance,
        bestPossibleBoundClassHistoryTotalDistance,
        bestPossibleBoundClassHistoryTotalInaDistance,
    } = jiNotationBoundClassAnalysis

    const [
        mediumLevelRank,
        highLevelRank,
        ultraLevelRank,
        extremeLevelRank,
    ] = extractJiNotationLevelRanks(bestPossibleBoundClassHistoryAnalysis)

    const [
        bestPossibleBoundClassHistoryMediumDistance,
        bestPossibleBoundClassHistoryHighDistance,
        bestPossibleBoundClassHistoryUltraDistance,
        bestPossibleBoundClassHistoryExtremeDistance,
    ] = extractJiNotationLevelDistances(bestPossibleBoundClassHistoryAnalysis)

    const [
        bestPossibleBoundClassHistoryMediumInaDistance,
        bestPossibleBoundClassHistoryHighInaDistance,
        bestPossibleBoundClassHistoryUltraInaDistance,
        bestPossibleBoundClassHistoryExtremeInaDistance,
    ] = extractJiNotationLevelDistances(bestPossibleBoundClassHistoryAnalysis, { ina: true })

    jiNotationBoundClassRow = [
        formatIntegerDecimal(jiNotationBoundClass.id, { align: true }),
        formatMinaName(lesserBoundedMinaName),
        formatMinaName(greaterBoundedMinaName),
        formatAscii(extremeLevelLesserBoundedCommaClass),
        formatAscii(extremeLevelGreaterBoundedCommaClass),
        mediumLevelRank,
        highLevelRank,
        ultraLevelRank,
        extremeLevelRank,
        formatIntegerDecimal(bestRank, { align: true }),
        bestPossibleBoundClassHistoryMediumDistance,
        bestPossibleBoundClassHistoryHighDistance,
        bestPossibleBoundClassHistoryUltraDistance,
        bestPossibleBoundClassHistoryExtremeDistance,
        formatDecimal(bestPossibleBoundClassHistoryTotalDistance, { align: true }),
        bestPossibleBoundClassHistoryMediumInaDistance,
        bestPossibleBoundClassHistoryHighInaDistance,
        bestPossibleBoundClassHistoryUltraInaDistance,
        bestPossibleBoundClassHistoryExtremeInaDistance,
        formatDecimal(bestPossibleBoundClassHistoryTotalInaDistance, { align: true }), // These are ¢ but b/c the header
        formatDecimal(cents, { align: true }),                                    // Specifically states they are ¢
        formatDecimal(computeCentsFromPitch(initialPosition), { align: true }),   // And this is a very dense table
        formatDecimal(initialPositionTinaDistance, { align: true }),              // We're saving space and no ¢ symbols
    ] as Row as Row<{ of: JiNotationBoundClassAnalysis }>

    return jiNotationBoundClassRow
}

export {
    computeJiNotationBoundClassRow,
}
