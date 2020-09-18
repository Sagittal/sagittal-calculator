import { formatInteger, Formatted, Integer, Rank } from "../../../../../general"
import { JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { EventType } from "../../../histories"
import { EventAnalysis, HistoryAnalysis } from "../../../history"

const extractJiNotationLevelRanks = (historyAnalysis: HistoryAnalysis): Array<Formatted<Integer & Rank<EventType>>> =>
    JI_NOTATION_LEVELS.map((jiNotationLevel: JiNotationLevel): Formatted<Integer & Rank<EventType>> => {
        const jiNotationLevelEventAnalysis = historyAnalysis.eventAnalyses
            .find((eventAnalysis: EventAnalysis): boolean => eventAnalysis.jiNotationLevel === jiNotationLevel)

        return jiNotationLevelEventAnalysis ?
            formatInteger(jiNotationLevelEventAnalysis.rank) as Formatted<Integer & Rank<EventType>> :
            " " as Formatted<Integer & Rank<EventType>>
    })

export {
    extractJiNotationLevelRanks,
}
