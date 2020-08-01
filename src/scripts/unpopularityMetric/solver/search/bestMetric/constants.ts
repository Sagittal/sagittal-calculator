import { sopfgtt } from "../../../bestMetrics"
import { Sum } from "../../../../../general"

const MAXIMUM_SEARCH_TIME: number = 10000

const SUM_OF_SQUARES_TO_BEAT = sopfgtt.sumOfSquares as Sum<"SquaredWeightedRankDifferences">

export {
    MAXIMUM_SEARCH_TIME,
    SUM_OF_SQUARES_TO_BEAT,
}
