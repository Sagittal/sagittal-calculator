const addRankToOurPopularities = ourApproximatePopularities => {
    const ourApproximatePopularitiesSortedByAntivotes = ourApproximatePopularities.sort((ourApproximatePopularity, nextOurApproximatePopularity) => {
        return ourApproximatePopularity.antivotes - nextOurApproximatePopularity.antivotes // todo: wouldn't have been bad if tested it
    })

    const ourApproximatePopularitiesRanked = ourApproximatePopularitiesSortedByAntivotes.map((value, index) => {
        return {
            ...value,
            rank: index + 1, // no zero-offset
        }
    })

    return ourApproximatePopularitiesRanked.sort((ourApproximatePopularityRanked, nextOurApproximatePopularityRanked) => {
        return ourApproximatePopularityRanked.index - nextOurApproximatePopularityRanked.index
    })
}

module.exports = {
    addRankToOurPopularities,
}
