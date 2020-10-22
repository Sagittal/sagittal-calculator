import { Abs, BLANK, Cents, formatDecimal, Formatted, indexOfFinalElement, Multiplier } from "../../../../../general"
import { Ina, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../history"

const extractJiNotationLevelDistances = (
    boundHistoryAnalysis: BoundHistoryAnalysis,
    { ina = false }: { ina?: boolean } = {},
): Array<Formatted<Multiplier<Ina> | Abs<Cents>>> => {
    const boundEventAnalyses = boundHistoryAnalysis.boundEventAnalyses

    return JI_NOTATION_LEVELS.slice(0, indexOfFinalElement(JI_NOTATION_LEVELS))
        .map((jiNotationLevel: JiNotationLevel): Formatted<Multiplier<Ina> | Abs<Cents>> => {
            const previousEventIndex = boundEventAnalyses
                .findIndex((boundEventAnalysis: BoundEventAnalysis): boolean => {
                    return boundEventAnalysis.jiNotationLevel === jiNotationLevel
                })
            if (previousEventIndex === -1) {
                return BLANK as Formatted<Multiplier<Ina> | Abs<Cents>>
            }
            const jiNotationLevelEventAnalysis: BoundEventAnalysis =
                boundEventAnalyses[ previousEventIndex + 1 ]

            return formatDecimal(
                ina ? jiNotationLevelEventAnalysis.inaDistance : jiNotationLevelEventAnalysis.distance,
                { align: true },
            ) as Formatted<Multiplier<Ina> | Abs<Cents>>
        })
}

export {
    extractJiNotationLevelDistances,
}
