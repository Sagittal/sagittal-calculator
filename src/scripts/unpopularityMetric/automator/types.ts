import { SumOfSquares } from "../sumOfSquares/types"
import { Submetric, SubmetricSampleConfig } from "../types"
import { Combination } from "../../../utilities/types"
import { Sample } from "./samples/types"

interface Metric {
    sumOfSquares: SumOfSquares,
    submetrics: Combination<Submetric>,
}

interface LocalMinimum extends Sample {
    sumOfSquares: SumOfSquares,
}

type SubmetricChunk = SubmetricSampleConfig
type ParameterChunk = SubmetricSampleConfig

type Chunk = SubmetricChunk | ParameterChunk

interface RecursivelyFindUnpopularityMetricOptions {
    depth?: number,
    bestMetric?: Metric,
    progressMessage?: string,
    localMinimum?: LocalMinimum,
    recurse?: boolean,
    debug?: boolean,
}

export {
    LocalMinimum,
    Chunk,
    Metric,
    SubmetricChunk,
    ParameterChunk,
    RecursivelyFindUnpopularityMetricOptions,
}
