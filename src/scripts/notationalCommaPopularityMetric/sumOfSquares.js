const computeSumOfSquares = (ourPopularities, realPopularities, r) => {
    return realPopularities.reduce(
        (sumOfSquares, commaPopularity, index) => {
            const ourRank = ourPopularities[index].rank
            const rank = commaPopularity.rank
            const squaredDistance = (ourRank ** r - rank ** r) ** 2

            return sumOfSquares + squaredDistance
        },
        0,
    )
}

module.exports = {
    computeSumOfSquares,
}
