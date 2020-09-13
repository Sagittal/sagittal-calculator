import { formatInteger, Formatted, Rank } from "../../../../../general"
import { LEVELS } from "../../../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../../../analyzeHistory"

const extractLevelRanks = (historyAnalysis: HistoryAnalysis): Array<Formatted<Rank<EventAnalysis>>> =>
    LEVELS.map(level => {
        const levelEvent = historyAnalysis.events.find((event: EventAnalysis) => event.level === level)

        return levelEvent ?
            formatInteger(levelEvent.rank) as Formatted<Rank<EventAnalysis>> :
            " " as Formatted<Rank<EventAnalysis>>
    })

export {
    extractLevelRanks,
}
