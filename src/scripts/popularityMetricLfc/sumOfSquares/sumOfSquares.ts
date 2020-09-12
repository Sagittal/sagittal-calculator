import { Popularity, Ranked } from "../../../general"
import { SumOfSquares } from "../bestMetric"
import { Unpopularity } from "./types"

const computeSumOfSquares = (
    rankedUnpopularities: Array<Ranked<Unpopularity>>,
    realPopularities: Array<Ranked<Popularity>>,
    z: number,
): SumOfSquares =>
    realPopularities.reduce(
        (sumOfSquares, popularity, index) => {
            const rankedUnpopularity: Ranked<Unpopularity> = rankedUnpopularities[ index ]
            const ourRank = rankedUnpopularity.rank
            const rank = popularity.rank
            const squaredRankDifference = (ourRank ** z - rank ** z) ** 2

            return sumOfSquares + squaredRankDifference as SumOfSquares
        },
        0 as SumOfSquares,
    )

export {
    computeSumOfSquares,
}
