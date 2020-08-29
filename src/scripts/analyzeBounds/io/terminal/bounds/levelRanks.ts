import { formatInteger, Formatted, Rank } from "../../../../../general"
import { LEVELS } from "../../../../../sagittal"
import { AnalyzedEvent, AnalyzedHistory } from "../../../types"

const extractLevelRanks = (analyzedHistory: AnalyzedHistory): Array<Formatted<Rank<AnalyzedEvent>>> =>
    LEVELS.map(level => {
        const levelEvent = analyzedHistory.events.find((event: AnalyzedEvent) => event.level === level)

        return levelEvent ?
            formatInteger(levelEvent.rank) as Formatted<Rank<AnalyzedEvent>> :
            " " as Formatted<Rank<AnalyzedEvent>>
    })

export {
    extractLevelRanks,
}
