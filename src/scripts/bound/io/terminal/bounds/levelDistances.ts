import { BLANK, Cents, formatNumber, Formatted, Multiplier } from "../../../../../general"
import { Ina, LEVELS } from "../../../../../sagittal"
import { AnalyzedEvent, AnalyzedHistory } from "../../../analyzedHistory"

const extractLevelDistances = (
    analyzedHistory: AnalyzedHistory, { ina = false }: { ina?: boolean } = {},
): Array<Formatted<Multiplier<Ina> | Cents>> => {
    const events = analyzedHistory.events

    return LEVELS.slice(0, LEVELS.length - 1).map(level => {
        const previousEventIndex = events.findIndex(event => event.level === level)
        if (previousEventIndex === -1) {
            return BLANK as Formatted<Multiplier<Ina> | Cents>
        }
        const levelEvent: AnalyzedEvent = events[ previousEventIndex + 1 ]

        
        return formatNumber(ina ? levelEvent.inaDistance : levelEvent.distance) as Formatted<Multiplier<Ina> | Cents>
    })
}

export {
    extractLevelDistances,
}
