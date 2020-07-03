const computeSumOfSquares = (ourPopularities, realPopularities, zipfExponent) => {
    return realPopularities.reduce(
        (sumOfSquares, commaPopularity, index) => {
            const ourRank = ourPopularities[index].rank
            const rank = commaPopularity.rank
            const squaredDistance = (ourRank ** zipfExponent - rank ** zipfExponent) ** 2

            return sumOfSquares + squaredDistance
        },
        0,
    )
}

module.exports = {
    computeSumOfSquares,
}
