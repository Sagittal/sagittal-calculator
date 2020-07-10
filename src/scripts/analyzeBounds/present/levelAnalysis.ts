import {FORMATTED_RANK_NAMES} from "./rank"
import {presentLevel} from "./level"
import {COLORS} from "./colors"

const presentLevelAnalysis = (level, levelsBestHistoryRanks, levelsBestCumulativeHistoryRanks) => {
    const presentedLevelAnalysis = [`${presentLevel(level)}            \there\tcmltv`]

    Object.entries(levelsBestHistoryRanks).forEach(([rankIndex, bestHistoryRankCount]) => {

        let presentedBestHistoryRankCount = bestHistoryRankCount.toString()
        while (presentedBestHistoryRankCount.length < 3) {
            presentedBestHistoryRankCount = " " + presentedBestHistoryRankCount
        }

        const bestCumulativeHistoryRankCount = levelsBestCumulativeHistoryRanks[rankIndex]
        let presentedBestCumulativeHistoryRankCount = bestCumulativeHistoryRankCount.toString()
        while (presentedBestCumulativeHistoryRankCount.length < 3) {
            presentedBestCumulativeHistoryRankCount = " " + presentedBestCumulativeHistoryRankCount
        }

        presentedLevelAnalysis.push(`${FORMATTED_RANK_NAMES[rankIndex]}\t${presentedBestHistoryRankCount}\t${presentedBestCumulativeHistoryRankCount}`[COLORS[rankIndex]])
    })

    return presentedLevelAnalysis.join("\n")
}

export {
    presentLevelAnalysis,
}
