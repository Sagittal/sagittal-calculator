const computeSumOfSquares = (ourRanks, commaPopularities) => {
    return commaPopularities.reduce(
        (sumOfSquares, commaPopularity, index) => {
            const ourRank = ourRanks[index].rank
            const rank = commaPopularity.rank
            const squaredDistance = (ourRank ** -1.37 - rank ** -1.37) ** 2

            return sumOfSquares + squaredDistance
        },
        0,
    )
}

module.exports = {
    computeSumOfSquares,
}
