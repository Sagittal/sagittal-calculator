import { Io, Maybe, shallowClone } from "../../../../../general"
import { Level, LEVELS } from "../../../../../sagittal"
import { levelsBestCumulativeHistoryRanks, levelsBestHistoryRanks } from "../../../analyzeBound"
import { formatLevelAnalysis } from "./levelAnalysis"

const formatLevelAnalyses = (): Io => {
    const formattedLevelAnalysis: Io[] = [] as Io[]

    shallowClone(LEVELS).reverse().forEach((level: Level): void => {
        if (level === Level.INSANE) {
            return
        }

        const levelBestHistoryRanks: { [ index: number ]: Maybe<number> } = levelsBestHistoryRanks[ level ]
        const levelBestCumulativeHistoryRanks: { [ index: number ]: number } = levelsBestCumulativeHistoryRanks[ level ]

        formattedLevelAnalysis.push(formatLevelAnalysis(level, levelBestHistoryRanks, levelBestCumulativeHistoryRanks))
    })

    return "\n\n   ---   Level Analyses   ---   \n\n\n" + formattedLevelAnalysis.join("\n\n") as Io
}

export {
    formatLevelAnalyses,
}
