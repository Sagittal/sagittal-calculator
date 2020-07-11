import { SumOfSquares } from "../sumOfSquares/types"
import { ParameterConfigs, Submetric, SubmetricConfig } from "../types"

type Point = number[] & { _CoordinateBrand: "Coordinate" }

type ChunkCount = number & { _ChunkCountBrand: "ChunkCount" }

interface Metric {
    sumOfSquares: SumOfSquares,
    submetrics: Submetric[],
}

interface LocalMinimum {
    sumOfSquares: SumOfSquares,
    point: Point,
    submetrics: Submetric[],
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
