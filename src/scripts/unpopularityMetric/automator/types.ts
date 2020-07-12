import { SumOfSquares } from "../sumOfSquares/types"
import { Submetric, SubmetricConfig } from "../types"
import { Combination } from "../../../utilities/types"
import { SamplePoint } from "./samples/types"

interface Metric {
    sumOfSquares: SumOfSquares,
    submetrics: Combination<Submetric>,
}

interface LocalMinimum {
    sumOfSquares: SumOfSquares,
    point: SamplePoint, // todo what is the other thing that has a point? a Sample ? maybe that should be something you mix in, so that a LocalMinimum could be a Metric but extended by the same thing
    submetrics: Combination<Submetric>,
}

type SubmetricChunk = SubmetricConfig
type ParameterChunk = SubmetricConfig

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
