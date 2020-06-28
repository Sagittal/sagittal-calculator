const addRankToOurPopularities = ourApproximatePopularities => {
    const sortedValues = ourApproximatePopularities.sort((a, b) => {
        return a.value - b.value
    })

    const rankedValues = sortedValues.map((value, index) => {
        return {
            ...value,
            rank: index + 1, // no zero-offset
        }
    })

    return rankedValues.sort((a, b) => {
        return a.index - b.index
    })
}

module.exports = {
    addRankToOurPopularities,
}
