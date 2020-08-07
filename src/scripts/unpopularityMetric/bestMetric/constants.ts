import { sopfgtt } from "../results/bestMetrics"
import { SumOfSquares } from "./types"

const MAXIMUM_SEARCH_TIME: number = 10000

const SUM_OF_SQUARES_TO_BEAT = sopfgtt.sumOfSquares as SumOfSquares

export {
    MAXIMUM_SEARCH_TIME,
    SUM_OF_SQUARES_TO_BEAT,
}
