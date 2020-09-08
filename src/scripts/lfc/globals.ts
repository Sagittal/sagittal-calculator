import { Combinations } from "../../general"
import { Metric, MetricName, Scope } from "./bestMetric"
import { INITIAL_LFC_SCRIPT_GROUP_SETTINGS, INITIAL_SOLVER_STATUS } from "./constants"
import { Chunk, SolverStatus } from "./solver"
import { Parameter, Submetric } from "./sumOfSquares"

const scopesToSearch: Scope[] = [] as unknown[] as Scope[]

const solverStatus: SolverStatus = JSON.parse(JSON.stringify(INITIAL_SOLVER_STATUS))

const bestMetrics: Map<MetricName, Metric> = new Map()

const metricNames: MetricName[] = []

const memoizedSubmetricChunkCombinations: Array<Combinations<Chunk<Submetric>>> = []
const memoizedParameterChunkCombinations: Array<Combinations<Chunk<Parameter>>> = []

const lfcScriptGroupSettings = JSON.parse(JSON.stringify(INITIAL_LFC_SCRIPT_GROUP_SETTINGS))

export {
    scopesToSearch,
    solverStatus,
    bestMetrics,
    memoizedSubmetricChunkCombinations,
    memoizedParameterChunkCombinations,
    lfcScriptGroupSettings,
    metricNames,
}
