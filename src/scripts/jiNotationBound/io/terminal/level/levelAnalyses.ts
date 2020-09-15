import { Io, Maybe, shallowClone } from "../../../../../general"
import { JiNotationLevel, JI_NOTATION_LEVELS } from "../../../../../sagittal"
import { jiNotationLevelsBestCumulativeHistoryRanks, jiNotationLevelsBestHistoryRanks } from "../../../bound"
import { formatJiNotationLevelAnalysis } from "./levelAnalysis"

const formatJiNotationLevelAnalyses = (): Io => {
    const formattedJiNotationLevelAnalysis: Io[] = [] as Io[]

    shallowClone(JI_NOTATION_LEVELS).reverse().forEach((jiNotationLevel: JiNotationLevel): void => {
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const jiNotationLevelBestHistoryRanks: { [ index: number ]: Maybe<number> } =
            jiNotationLevelsBestHistoryRanks[ jiNotationLevel ]
        const jiNotationLevelBestCumulativeHistoryRanks: { [ index: number ]: number } =
            jiNotationLevelsBestCumulativeHistoryRanks[ jiNotationLevel ]

        formattedJiNotationLevelAnalysis.push(
            formatJiNotationLevelAnalysis(
                jiNotationLevel,
                jiNotationLevelBestHistoryRanks,
                jiNotationLevelBestCumulativeHistoryRanks,
            ),
        )
    })

    return "\n\n   ---   JI Notation Level Analyses   ---   \n\n\n" + formattedJiNotationLevelAnalysis
        .join("\n\n") as Io
}

export {
    formatJiNotationLevelAnalyses,
}
