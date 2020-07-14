import { Combinations, Count } from "../../../general"
import { Metric } from "./search"
import { Chunk, ParameterChunk, Scope, Status, SubmetricChunk } from "./types"

const populatedForChunkCount: number[] = []
const searchedForChunkCount: number[] = []

const scopesForChunkCount: Scope[][] = [] as unknown as Scope[][]

const status: Status = {
    finishedPopulating: false,
    populatingChunkCount: 0 as Count<Chunk>,
    upperBoundChunkCount: 0 as Count<Chunk>,
    searchingChunkCount: 0 as Count<Chunk>,
}

const bestMetricsForChunkCount: Metric[] = []

const cachedSubmetricChunkCombinations: Array<Combinations<SubmetricChunk>> = []
const cachedParameterChunkCombinations: Array<Combinations<ParameterChunk>> = []

export {
    populatedForChunkCount,
    searchedForChunkCount,
    scopesForChunkCount,
    status,
    bestMetricsForChunkCount,
    cachedSubmetricChunkCombinations,
    cachedParameterChunkCombinations,
}
