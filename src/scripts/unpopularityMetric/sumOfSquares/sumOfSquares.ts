import { SumOfSquares } from "../bestMetric"
import { Popularity, RankedUnpopularity } from "./types"

const computeSumOfSquares = (rankedUnpopularities: RankedUnpopularity[], realPopularities: Popularity[], zipfExponent: number): SumOfSquares =>
    realPopularities.reduce(
        (sumOfSquares, commaPopularity, index) => {
            const ourRank = rankedUnpopularities[ index ].rank
            const rank = commaPopularity.rank
            const squaredRankDifference = (ourRank ** zipfExponent - rank ** zipfExponent) ** 2

            return sumOfSquares + squaredRankDifference as SumOfSquares
        },
        0 as SumOfSquares,
    )

export {
    computeSumOfSquares,
}
