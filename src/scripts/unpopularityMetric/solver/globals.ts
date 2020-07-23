import { Combinations, Count } from "../../../general"
import { ParameterChunk, SubmetricChunk } from "./populate/types"
import { Metric } from "./search"
import { Chunk, Scope, Status } from "./types"

const populatedsForChunkCount: number[] = []
const searchedsForChunkCount: number[] = []

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
    populatedsForChunkCount,
    searchedsForChunkCount,
    scopesForChunkCount,
    status,
    bestMetricsForChunkCount,
    cachedSubmetricChunkCombinations,
    cachedParameterChunkCombinations,
}
