import { IO, Maybe, shallowClone } from "../../../../../general"
import { Level, LEVELS } from "../../../../../sagittal"
import { levelsBestCumulativeHistoryRanks, levelsBestHistoryRanks } from "../../../analyzeBound"
import { formatLevelAnalysis } from "./levelAnalysis"

const formatLevelAnalyses = (): IO => {
    const formattedLevelAnalysis: IO[] = [] as IO[]

    shallowClone(LEVELS).reverse().forEach(level => {
        if (level === Level.INSANE) {
            return
        }

        const levelBestHistoryRanks: { [ index: number ]: Maybe<number> } = levelsBestHistoryRanks[ level ]
        const levelBestCumulativeHistoryRanks: { [ index: number ]: number } = levelsBestCumulativeHistoryRanks[ level ]

        formattedLevelAnalysis.push(formatLevelAnalysis(level, levelBestHistoryRanks, levelBestCumulativeHistoryRanks))
    })

    return "\n\n   ---   Level Analyses   ---   \n\n\n" + formattedLevelAnalysis.join("\n\n") as IO
}

export {
    formatLevelAnalyses,
}