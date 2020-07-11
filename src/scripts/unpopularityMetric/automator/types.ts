import { SumOfSquares } from "../sumOfSquares/types"
import { ParameterConfigs, Submetric, SubmetricConfig } from "../types"
import { Combination } from "../../../utilities/types"
import { Point } from "../samples/types"

type ChunkCount = number & { _ChunkCountBrand: "ChunkCount" }

interface Metric {
    sumOfSquares: SumOfSquares,
    submetrics: Combination<Submetric>,
}

interface LocalMinimum {
    sumOfSquares: SumOfSquares,
    point: Point, // todo what is the other thing that has a point? a Sample ? maybe that should be something you mix in, so that a LocalMinimum could be a Metric but extended by the same thing
    submetrics: Combination<Submetric>,
}

// todo: and then the directory should be called submetricCombinations not anymore

type SubmetricChunk = SubmetricConfig
type ParameterChunk = ParameterConfigs

export {
    LocalMinimum,
    ChunkCount,
    Metric,
    SubmetricChunk,
    ParameterChunk,
}
