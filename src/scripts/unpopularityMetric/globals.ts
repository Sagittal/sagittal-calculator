import { Combinations, Count } from "../../general"
import { Metric, Scope } from "./bestMetric"
import { Chunk, ParameterChunk, SolverStatus, SubmetricChunk } from "./solver"

const populatedsForChunkCount: number[] = []
const searchedsForChunkCount: number[] = []

const scopesForChunkCount: Scope[][] = [] as unknown as Scope[][]
const killedsForChunkCount: Scope[][] = [] as unknown as Scope[][]

const solverStatus: SolverStatus = {
    finishedPopulating: false,
    populatingChunkCount: 0 as Count<Chunk>,
    upperBoundChunkCount: 0 as Count<Chunk>,
    searchingChunkCount: 0 as Count<Chunk>,
}

const bestMetricsForChunkCount: Array<Record<string, Metric>> = []

const memoizedSubmetricChunkCombinations: Array<Combinations<SubmetricChunk>> = []
const memoizedParameterChunkCombinations: Array<Combinations<ParameterChunk>> = []

export {
    populatedsForChunkCount,
    searchedsForChunkCount,
    scopesForChunkCount,
    solverStatus,
    bestMetricsForChunkCount,
    memoizedSubmetricChunkCombinations,
    memoizedParameterChunkCombinations,
    killedsForChunkCount,
}
