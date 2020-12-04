import {Combinations, Name} from "../../general"
import {Metric, Scope} from "./bestMetric"
import {DEFAULT_POPULARITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS, INITIAL_SOLVER_STATUS} from "./constants"
import {Chunk, SolverStatus} from "./solver"
import {PopularityParameterId, Submetric} from "./sumOfSquares"
import {PopularityMetricLfcScriptGroupSettings} from "./types"

const scopesToSearch: Scope[] = [] as unknown[] as Scope[]

const solverStatus: SolverStatus = JSON.parse(JSON.stringify(INITIAL_SOLVER_STATUS))

const bestMetrics: Map<Name<Metric>, Metric> = new Map()

const metricNames: Array<Name<Metric>> = []

const memoizedSubmetricChunkCombinations: Array<Combinations<Chunk<Submetric>>> = []
const memoizedParameterChunkCombinations: Array<Combinations<Chunk<PopularityParameterId>>> = []

const popularityMetricLfcScriptGroupSettings: PopularityMetricLfcScriptGroupSettings =
    JSON.parse(JSON.stringify(DEFAULT_POPULARITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS))

export {
    scopesToSearch,
    solverStatus,
    bestMetrics,
    memoizedSubmetricChunkCombinations,
    memoizedParameterChunkCombinations,
    popularityMetricLfcScriptGroupSettings,
    metricNames,
}
