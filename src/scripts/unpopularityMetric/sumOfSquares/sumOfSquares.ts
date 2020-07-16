import { Sum } from "../../../general"
import { Popularity, RankedUnpopularity, } from "./types"

const computeSumOfSquares = (rankedUnpopularities: RankedUnpopularity[], realPopularities: Popularity[], zipfExponent: number): Sum<"SquaredWeightedRankDifferences"> =>
    realPopularities.reduce(
        (sumOfSquares, commaPopularity, index) => {
            const ourRank = rankedUnpopularities[ index ].rank
            const rank = commaPopularity.rank
            const squaredRankDifference = (ourRank ** zipfExponent - rank ** zipfExponent) ** 2

            return sumOfSquares + squaredRankDifference as Sum<"SquaredWeightedRankDifferences">
        },
        0 as Sum<"SquaredWeightedRankDifferences">,
    )

export {
    computeSumOfSquares,
}
