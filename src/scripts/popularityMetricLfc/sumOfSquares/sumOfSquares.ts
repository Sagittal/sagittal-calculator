import {Ranked, ScalaPopularityStat} from "@sagittal/general"
import {SumOfSquares} from "../bestMetric"
import {LfcUnpopularityEstimate} from "./types"

const computeSumOfSquares = (
    rankedUnpopularities: Array<Ranked<LfcUnpopularityEstimate>>,
    popularities: Array<Ranked<ScalaPopularityStat>>,
    z: number,
): SumOfSquares =>
    popularities.reduce(
        (sumOfSquares: SumOfSquares, popularity: Ranked<ScalaPopularityStat>, index: number): SumOfSquares => {
            const rankedUnpopularity: Ranked<LfcUnpopularityEstimate> = rankedUnpopularities[index]
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
