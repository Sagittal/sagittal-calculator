import {Combination, Count, Index} from "../../../../general"
import {PopularityParameterId, Submetric} from "../../sumOfSquares"
import {Chunk} from "../types"

interface PopulateScopesForSubmetricChunkCombinationOptions {
    parameterChunkCombinations: Array<Combination<Chunk<PopularityParameterId>>>,
    parameterChunkCombinationIndex: Index<Combination<Chunk<PopularityParameterId>>>,
    submetricChunkCombinationIndex: Index<Combination<Chunk<Submetric>>>,
    submetricChunkCombinationCount: Count<Combination<Chunk<Submetric>>>
}

export {
    PopulateScopesForSubmetricChunkCombinationOptions,
}
