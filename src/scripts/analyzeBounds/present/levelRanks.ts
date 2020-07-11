import { LEVELS } from "../../../notations/ji/levels"
import { AnalyzedEvent, AnalyzedHistory } from "../types"

const extractLevelRanks = (analyzedHistory: AnalyzedHistory) => {
    return LEVELS.map(level => {
        const levelEvent = analyzedHistory.events.find((event: AnalyzedEvent) => event.level === level)

        return levelEvent ? levelEvent.rank : " "
    })
}

export {
    extractLevelRanks,
}
