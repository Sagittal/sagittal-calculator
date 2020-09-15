import { formatInteger, Formatted, Rank } from "../../../../../general"
import { JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { EventAnalysis, HistoryAnalysis } from "../../../history"

const extractJiNotationLevelRanks = (historyAnalysis: HistoryAnalysis): Array<Formatted<Rank<EventAnalysis>>> =>
    JI_NOTATION_LEVELS.map((jiNotationLevel: JiNotationLevel): Formatted<Rank<EventAnalysis>> => {
        const jiNotationLevelEventAnalysis = historyAnalysis.eventAnalyses
            .find((eventAnalysis: EventAnalysis): boolean => eventAnalysis.jiNotationLevel === jiNotationLevel)

        return jiNotationLevelEventAnalysis ?
            formatInteger(jiNotationLevelEventAnalysis.rank) as Formatted<Rank<EventAnalysis>> :
            " " as Formatted<Rank<EventAnalysis>>
    })

export {
    extractJiNotationLevelRanks,
}
