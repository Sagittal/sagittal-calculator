import { Popularity, RankedUnpopularity, SumOfSquares } from "./types"

const computeSumOfSquares = (rankedUnpopularities: RankedUnpopularity[], realPopularities: Popularity[], zipfExponent: number): SumOfSquares =>
    realPopularities.reduce(
        (sumOfSquares, commaPopularity, index) => {
            const ourRank = rankedUnpopularities[ index ].rank
            const rank = commaPopularity.rank
            const squaredDistance = (ourRank ** zipfExponent - rank ** zipfExponent) ** 2

            return sumOfSquares + squaredDistance as SumOfSquares
        },
        0 as SumOfSquares,
    )

export {
    computeSumOfSquares,
}
