const addRankToOurPopularities = ourApproximatePopularities => {
    // console.log('ourApproximatePopularities', ourApproximatePopularities)
    const sortedValues = ourApproximatePopularities.sort((a, b) => {
        return a.value - b.value
    })
    // console.log('sortedValues', sortedValues)

    const rankedValues = sortedValues.map((value, index) => {
        return {
            ...value,
            rank: index + 1, // no zero-offset
        }
    })
    // console.log('rankedValues', rankedValues)

    let returnedToOriginalSortValues = rankedValues.sort((a, b) => {
        return a.index - b.index
    })
    // console.log('returnedToOriginalSortValues', returnedToOriginalSortValues)

    return returnedToOriginalSortValues
}

module.exports = {
    addRankToOurPopularities,
}
