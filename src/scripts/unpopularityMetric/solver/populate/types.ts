import { Combination, Count, Index } from "../../../../general"
import { SubmetricScope } from "../../bestMetric"
import { Chunk } from "../types"

interface PopulateScoepsForChunkCountAndSubmetricChunkCombinationOptions {
    parameterChunkCombinations: Array<Combination<ParameterChunk>>,
    parameterChunkCombinationIndex?: Index<Combination<ParameterChunk>>,
    chunkCount: Count<Chunk>,
    submetricChunkCombinationIndex: Index<Combination<SubmetricChunk>>,
    submetricChunkCombinationCount: Count<Combination<SubmetricChunk>>
}

type SubmetricChunk = SubmetricScope & { _SubmetricChunkBrand: "SubmetricChunk" }
type ParameterChunk = SubmetricScope & { _ParameterChunkBrand: "ParameterChunk" }

export {
    PopulateScoepsForChunkCountAndSubmetricChunkCombinationOptions,
    SubmetricChunk,
    ParameterChunk,
}
