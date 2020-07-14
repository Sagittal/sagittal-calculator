import { computeTriangularNumber } from "../../../general"
import { RankedUnpopularity, Unpopularity, UnpopularityRank } from "./types"

const addRankToUnpopularities = (unpopularities: Unpopularity[]): RankedUnpopularity[] => {
    const unpopularitiesSortedByAntivotes = unpopularities.sort((unpopularity, nextUnpopularity) =>
        unpopularity.antivotes - nextUnpopularity.antivotes)

    const rankedUnpopularities: RankedUnpopularity[] = unpopularitiesSortedByAntivotes.map((unpopularity, index): RankedUnpopularity => {
        if ((unpopularity as RankedUnpopularity).rank) { return unpopularity as RankedUnpopularity }

        let tiesCount = 0
        unpopularitiesSortedByAntivotes.slice(index).forEach(worseOrTiedUnpopularity => {
            if (worseOrTiedUnpopularity.antivotes === unpopularity.antivotes) {
                tiesCount += 1
            }
        })

        let rank: UnpopularityRank
        if (tiesCount === 0) {
            rank = index + 1 as UnpopularityRank // No zero-offset
        } else {
            rank = ((index * tiesCount) + computeTriangularNumber(tiesCount)) / tiesCount as UnpopularityRank

            for (let i = index; i < index + tiesCount; i++) {
                (unpopularitiesSortedByAntivotes[ i ] as RankedUnpopularity).rank = rank as UnpopularityRank
            }
        }

        return { ...unpopularity, rank }
    })

    return rankedUnpopularities.sort((unpopularityRanked, nextUnpopularityRanked) =>
        unpopularityRanked.index - nextUnpopularityRanked.index)
}

export {
    addRankToUnpopularities,
}
