import { SumOfSquares } from "../sumOfSquares/types"
import { ParameterConfigs, Submetric, SubmetricConfig } from "../types"
import { Combination } from "../../../utilities/types"

type Point = number[] & { _CoordinateBrand: "Coordinate" }

type ChunkCount = number & { _ChunkCountBrand: "ChunkCount" }

interface Metric {
    sumOfSquares: SumOfSquares,
    submetrics: Combination<Submetric>,
}

interface LocalMinimum {
    sumOfSquares: SumOfSquares,
    point: Point, // todo what is the other thing that has a point? a SubmetricCombination ? maybe that should be something you mix in, so that a LocalMinimum could be a Metric but extended by the same thing
    submetrics: Combination<Submetric>,
}

type SubmetricChunk = SubmetricConfig
type ParameterChunk = ParameterConfigs

export {
    Point,
    LocalMinimum,
    ChunkCount,
    Metric,
    SubmetricChunk,
    ParameterChunk,
}
