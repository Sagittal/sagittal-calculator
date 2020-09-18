import { Count, Integer, Io, join, Maybe, NEWLINE, Rank, shallowClone, sumTexts } from "../../../../../general"
import { JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks } from "../../../bound"
import { EventAnalysis } from "../../../history"
import { LEVEL_ANALYSES_TITLE } from "../titles"
import { formatJiNotationLevelAnalysis } from "./levelAnalysis"

const formatJiNotationLevelAnalyses = (): Io => {
    const formattedJiNotationLevelAnalysis: Io[] = [] as Io[]

    shallowClone(JI_NOTATION_LEVELS).reverse().forEach((jiNotationLevel: JiNotationLevel): void => {
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const jiNotationLevelBestHistoryRanks: Record<number, Maybe<Count<Integer & Rank<EventAnalysis>>>> =
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ]
        const jiNotationLevelBestCumulativeHistoryRanks: Record<number, Count<Integer & Rank<EventAnalysis>>> =
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ]
        
        formattedJiNotationLevelAnalysis.push(
            formatJiNotationLevelAnalysis(
                jiNotationLevel,
                jiNotationLevelBestHistoryRanks,
                jiNotationLevelBestCumulativeHistoryRanks,
            ),
        )
    })
    
    return sumTexts(LEVEL_ANALYSES_TITLE, join(formattedJiNotationLevelAnalysis, NEWLINE))
}

export {
    formatJiNotationLevelAnalyses,
}
