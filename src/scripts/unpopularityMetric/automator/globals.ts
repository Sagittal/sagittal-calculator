import { SampleConfig } from "../types"
import { Combinations, Count } from "../../../utilities/types"
import { Chunk, ParameterChunk, Status, SubmetricChunk } from "./types"
import { Metric } from "./process/types"

let populatedForChunkCount: number[] = []
let processedForChunkCount: number[] = []

const sampleConfigsForChunkCount: SampleConfig[][] = [] as unknown as SampleConfig[][]

const status: Status = {
    finishedPopulating: false,
    populatingChunkCount: 0 as Count<Chunk>,
    upperBoundChunkCount: 0 as Count<Chunk>,
    processingChunkCount: 0 as Count<Chunk>,
}

const bestMetricsForChunkCount: Metric[] = []

const cachedSubmetricChunkCombinations: Combinations<SubmetricChunk>[] = []
const cachedParameterChunkCombinations: Combinations<ParameterChunk>[] = []

export {
    populatedForChunkCount,
    processedForChunkCount,
    sampleConfigsForChunkCount,
    status,
    bestMetricsForChunkCount,
    cachedSubmetricChunkCombinations,
    cachedParameterChunkCombinations,
}
