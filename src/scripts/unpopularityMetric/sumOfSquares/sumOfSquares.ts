import { SumOfSquares } from "../bestMetric"
import { Popularity, RankedUnpopularity } from "./types"

const computeSumOfSquares = (rankedUnpopularities: RankedUnpopularity[], realPopularities: Popularity[], z: number): SumOfSquares =>
    realPopularities.reduce(
        (sumOfSquares, commaPopularity, index) => {
            const ourRank = rankedUnpopularities[ index ].rank
            const rank = commaPopularity.rank
            const squaredRankDifference = (ourRank ** z - rank ** z) ** 2

            return sumOfSquares + squaredRankDifference as SumOfSquares
        },
        0 as SumOfSquares,
    )

export {
    computeSumOfSquares,
}
