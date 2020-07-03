const triangularNumber = number => {
    return (number * (number + 1)) / 2
}

const addRankToOurPopularities = ourApproximatePopularities => {
    const ourApproximatePopularitiesSortedByAntivotes = ourApproximatePopularities.sort((ourApproximatePopularity, nextOurApproximatePopularity) => {
        return ourApproximatePopularity.antivotes - nextOurApproximatePopularity.antivotes // todo: wouldn't have been bad if tested it
    })

    const ourApproximatePopularitiesRanked = ourApproximatePopularitiesSortedByAntivotes.map((popularity, index) => {
        if (popularity.rank) return popularity

        let tiesCount = 0
        ourApproximatePopularitiesSortedByAntivotes.slice(index).forEach(worseOrTiedPopularity => {
            if (worseOrTiedPopularity.antivotes === popularity.antivotes) {
                tiesCount++
            }
        })

        let rank
        if (tiesCount === 0) {
            rank = index + 1 // no zero-offset
        } else {
            rank = ((index * tiesCount) + triangularNumber(tiesCount) ) / tiesCount

            for (let i = index; i < index + tiesCount; i++) {
                // console.log(ourApproximatePopularitiesSortedByAntivotes[i])
                ourApproximatePopularitiesSortedByAntivotes[i].rank = rank
            }
        }


        return {
            ...popularity,
            rank,
        }
    })

    return ourApproximatePopularitiesRanked.sort((ourApproximatePopularityRanked, nextOurApproximatePopularityRanked) => {
        return ourApproximatePopularityRanked.index - nextOurApproximatePopularityRanked.index
    })
}

module.exports = {
    addRankToOurPopularities,
}
