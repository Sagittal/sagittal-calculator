import { BLANK, Cents, formatNumber, Formatted, indexOfFinalElement, Multiplier } from "../../../../../general"
import { Ina, LEVELS } from "../../../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../../../analyzeHistory"

const extractLevelDistances = (
    historyAnalysis: HistoryAnalysis, { ina = false }: { ina?: boolean } = {},
): Array<Formatted<Multiplier<Ina> | Cents>> => {
    const events = historyAnalysis.events

    return LEVELS.slice(0, indexOfFinalElement(LEVELS)).map(level => {
        const previousEventIndex = events.findIndex(event => event.level === level)
        if (previousEventIndex === -1) {
            return BLANK as Formatted<Multiplier<Ina> | Cents>
        }
        const levelEvent: EventAnalysis = events[ previousEventIndex + 1 ]


        return formatNumber(ina ? levelEvent.inaDistance : levelEvent.distance) as Formatted<Multiplier<Ina> | Cents>
    })
}

export {
    extractLevelDistances,
}
