import { SumOfSquares } from "../sumOfSquares/types"
import { Submetric } from "../types"

type Coordinate = number[] & { _CoordinateBrand: "Coordinate" }

type ChunkCount = number & { _ChunkCountBrand: "ChunkCount" }

interface Metric {
    sumOfSquares: SumOfSquares,
    submetrics: Submetric[],
}

interface LocalMinimum {
    sumOfSquares: SumOfSquares,
    coordinate: Coordinate,
    submetrics: Submetric[],
}

export {
    Coordinate,
    LocalMinimum,
    ChunkCount,
    Metric,
}
