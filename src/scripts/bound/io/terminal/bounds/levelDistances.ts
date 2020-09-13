import { BLANK, Cents, formatNumber, Formatted, indexOfFinalElement, Multiplier } from "../../../../../general"
import { Ina, Level, LEVELS } from "../../../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../../../analyzeHistory"

const extractLevelDistances = (
    historyAnalysis: HistoryAnalysis, { ina = false }: { ina?: boolean } = {},
): Array<Formatted<Multiplier<Ina> | Cents>> => {
    const eventAnalyses = historyAnalysis.eventAnalyses

    return LEVELS.slice(0, indexOfFinalElement(LEVELS)).map((level: Level): Formatted<Multiplier<Ina> | Cents> => {
        const previousEventIndex = eventAnalyses.findIndex((event: EventAnalysis): boolean => event.level === level)
        if (previousEventIndex === -1) {
            return BLANK as Formatted<Multiplier<Ina> | Cents>
        }
        const levelEvent: EventAnalysis = eventAnalyses[ previousEventIndex + 1 ]


        return formatNumber(ina ? levelEvent.inaDistance : levelEvent.distance) as Formatted<Multiplier<Ina> | Cents>
    })
}

export {
    extractLevelDistances,
}
