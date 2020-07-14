import { LEVELS } from "../../../notations"
import { AnalyzedEvent, AnalyzedHistory } from "../types"

const extractLevelRanks = (analyzedHistory: AnalyzedHistory) =>
    LEVELS.map(level => {
        const levelEvent = analyzedHistory.events.find((event: AnalyzedEvent) => event.level === level)

        return levelEvent ? levelEvent.rank : " "
    })

export {
    extractLevelRanks,
}
