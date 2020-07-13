import { Scope } from "../types"
import { Combinations, Count } from "../../../utilities/types"
import { Chunk, ParameterChunk, Status, SubmetricChunk } from "./types"
import { Metric } from "./search/bestMetric/types"

let populatedForChunkCount: number[] = []
let searchedForChunkCount: number[] = []

const scopesForChunkCount: Scope[][] = [] as unknown as Scope[][]

const status: Status = {
    finishedPopulating: false,
    populatingChunkCount: 0 as Count<Chunk>,
    upperBoundChunkCount: 0 as Count<Chunk>,
    searchingChunkCount: 0 as Count<Chunk>,
}

const bestMetricsForChunkCount: Metric[] = []

const cachedSubmetricChunkCombinations: Combinations<SubmetricChunk>[] = []
const cachedParameterChunkCombinations: Combinations<ParameterChunk>[] = []

export {
    populatedForChunkCount,
    searchedForChunkCount,
    scopesForChunkCount,
    status,
    bestMetricsForChunkCount,
    cachedSubmetricChunkCombinations,
    cachedParameterChunkCombinations,
}
