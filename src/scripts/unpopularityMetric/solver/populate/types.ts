import { Combination, Count, Index } from "../../../../general"
import { SubmetricScope } from "../../bestMetric"

interface PopulateScopesForSubmetricChunkCombinationOptions {
    parameterChunkCombinations: Array<Combination<ParameterChunk>>,
    parameterChunkCombinationIndex?: Index<Combination<ParameterChunk>>,
    submetricChunkCombinationIndex: Index<Combination<SubmetricChunk>>,
    submetricChunkCombinationCount: Count<Combination<SubmetricChunk>>
}

type SubmetricChunk = SubmetricScope & { _SubmetricChunkBrand: "SubmetricChunk" }
type ParameterChunk = SubmetricScope & { _ParameterChunkBrand: "ParameterChunk" }

export {
    PopulateScopesForSubmetricChunkCombinationOptions,
    SubmetricChunk,
    ParameterChunk,
}
