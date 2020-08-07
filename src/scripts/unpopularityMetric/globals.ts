import { Combinations, Count, Unit } from "../../general"
import { Metric, Scope } from "./bestMetric"
import { Chunk, ParameterChunk, SolverStatus, SubmetricChunk } from "./solver"
import { ParameterValue } from "./sumOfSquares"

const scopesToSearch: Scope[] = [] as unknown as Scope[]
const scopesTimedOut: Scope[] = [] as unknown as Scope[]

const solverStatus: SolverStatus = {
    chunkCount: 0 as Count<Chunk>,
    finishedPopulating: false,
    populatedScopeCount: 0 as Count<Scope>,
    searchedScopeCount: 0 as Count<Scope>,
    maximumUnit: 0 as Unit<ParameterValue>,
}

const bestMetrics: Record<string, Metric> = { }

const memoizedSubmetricChunkCombinations: Array<Combinations<SubmetricChunk>> = []
const memoizedParameterChunkCombinations: Array<Combinations<ParameterChunk>> = []

export {
    scopesToSearch,
    solverStatus,
    bestMetrics,
    memoizedSubmetricChunkCombinations,
    memoizedParameterChunkCombinations,
    scopesTimedOut,
}