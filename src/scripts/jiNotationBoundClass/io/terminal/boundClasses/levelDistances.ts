import { Abs, BLANK, Cents, formatDecimal, Formatted, indexOfFinalElement, Multiplier } from "../../../../../general"
import { Ina, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { BoundClassEventAnalysis, BoundClassHistoryAnalysis } from "../../../history"

const extractJiNotationLevelDistances = (
    boundClassHistoryAnalysis: BoundClassHistoryAnalysis,
    { ina = false }: { ina?: boolean } = {},
): Array<Formatted<Multiplier<Ina> | Abs<Cents>>> => {
    const boundClassEventAnalyses = boundClassHistoryAnalysis.boundClassEventAnalyses

    return JI_NOTATION_LEVELS.slice(0, indexOfFinalElement(JI_NOTATION_LEVELS))
        .map((jiNotationLevel: JiNotationLevel): Formatted<Multiplier<Ina> | Abs<Cents>> => {
            const previousEventIndex = boundClassEventAnalyses
                .findIndex((boundClassEventAnalysis: BoundClassEventAnalysis): boolean => {
                    return boundClassEventAnalysis.jiNotationLevel === jiNotationLevel
                })
            if (previousEventIndex === -1) {
                return BLANK as Formatted<Multiplier<Ina> | Abs<Cents>>
            }
            const jiNotationLevelEventAnalysis: BoundClassEventAnalysis =
                boundClassEventAnalyses[ previousEventIndex + 1 ]

            return formatDecimal(
                ina ? jiNotationLevelEventAnalysis.inaDistance : jiNotationLevelEventAnalysis.distance,
                { align: true },
            ) as Formatted<Multiplier<Ina> | Abs<Cents>>
        })
}

export {
    extractJiNotationLevelDistances,
}
