import { Combination, Count, Index } from "../../../../general"
import { Parameter, Submetric } from "../../sumOfSquares"
import { Chunk } from "../types"

interface PopulateScopesForSubmetricChunkCombinationOptions {
    parameterChunkCombinations: Array<Combination<Chunk<Parameter>>>,
    parameterChunkCombinationIndex: Index<Combination<Chunk<Parameter>>>,
    submetricChunkCombinationIndex: Index<Combination<Chunk<Submetric>>>,
    submetricChunkCombinationCount: Count<Combination<Chunk<Submetric>>>
}

export {
    PopulateScopesForSubmetricChunkCombinationOptions,
}
