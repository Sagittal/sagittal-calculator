import {computeTriangularNumber} from "../../../utilities/triangularNumber"

const addRankToUnpopularities = unpopularities => {
    const unpopularitiesSortedByAntivotes = unpopularities.sort((unpopularity, nextUnpopularity) => {
        return unpopularity.antivotes - nextUnpopularity.antivotes
    })

    const unpopularitiesRanked = unpopularitiesSortedByAntivotes.map((unpopularity, index) => {
        if (unpopularity.rank) return unpopularity

        let tiesCount = 0
        unpopularitiesSortedByAntivotes.slice(index).forEach(worseOrTiedUnpopularity => {
            if (worseOrTiedUnpopularity.antivotes === unpopularity.antivotes) {
                tiesCount++
            }
        })

        let rank
        if (tiesCount === 0) {
            rank = index + 1 // no zero-offset
        } else {
            rank = ((index * tiesCount) + computeTriangularNumber(tiesCount)) / tiesCount

            for (let i = index; i < index + tiesCount; i++) {
                unpopularitiesSortedByAntivotes[i].rank = rank
            }
        }

        return {...unpopularity, rank}
    })

    return unpopularitiesRanked.sort((unpopularityRanked, nextUnpopularityRanked) => {
        return unpopularityRanked.index - nextUnpopularityRanked.index
    })
}

export {
    addRankToUnpopularities,
}
