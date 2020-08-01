import { Count, Sum } from "../../../general"
import { sopfgtt } from "../bestMetrics"
import { Chunk } from "../solver"

const MAXIMUM_SEARCH_TIME: number = 10000

const SUM_OF_SQUARES_TO_BEAT = sopfgtt.sumOfSquares as Sum<"SquaredWeightedRankDifferences">

const DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE = 0 as Count<Chunk>

export {
    MAXIMUM_SEARCH_TIME,
    SUM_OF_SQUARES_TO_BEAT,
    DUMMY_CHUNK_COUNT_FOR_ONE_OFF_BEST_METRIC_FROM_SCOPE,
}
