import { formatInteger, Formatted, Rank } from "../../../../../general"
import { Level, LEVELS } from "../../../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../../../analyzeHistory"

const extractLevelRanks = (historyAnalysis: HistoryAnalysis): Array<Formatted<Rank<EventAnalysis>>> =>
    LEVELS.map((level: Level): Formatted<Rank<EventAnalysis>> => {
        const levelEvent = historyAnalysis.eventAnalyses.find((event: EventAnalysis): boolean => event.level === level)

        return levelEvent ?
            formatInteger(levelEvent.rank) as Formatted<Rank<EventAnalysis>> :
            " " as Formatted<Rank<EventAnalysis>>
    })

export {
    extractLevelRanks,
}
