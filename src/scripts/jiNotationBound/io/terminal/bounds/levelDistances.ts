import { BLANK, Cents, formatNumber, Formatted, indexOfFinalElement, Multiplier } from "../../../../../general"
import { Ina, JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../../../history"

const extractJiNotationLevelDistances = (
    historyAnalysis: HistoryAnalysis,
    { ina = false }: { ina?: boolean } = {},
): Array<Formatted<Multiplier<Ina> | Cents>> => {
    const eventAnalyses = historyAnalysis.eventAnalyses

    return JI_NOTATION_LEVELS.slice(0, indexOfFinalElement(JI_NOTATION_LEVELS))
        .map((jiNotationLevel: JiNotationLevel): Formatted<Multiplier<Ina> | Cents> => {
            const previousEventIndex = eventAnalyses
                .findIndex((eventAnalysis: EventAnalysis): boolean => eventAnalysis.jiNotationLevel === jiNotationLevel)
            if (previousEventIndex === -1) {
                return BLANK as Formatted<Multiplier<Ina> | Cents>
            }
            const jiNotationLevelEventAnalysis: EventAnalysis = eventAnalyses[ previousEventIndex + 1 ]

            return formatNumber(
                ina ? jiNotationLevelEventAnalysis.inaDistance : jiNotationLevelEventAnalysis.distance,
            ) as Formatted<Multiplier<Ina> | Cents>
        })
}

export {
    extractJiNotationLevelDistances,
}
