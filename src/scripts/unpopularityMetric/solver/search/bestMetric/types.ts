import { Combination, Count } from "../../../../../general"
import { SumOfSquares } from "../../../sumOfSquares"
import { Submetric } from "../../../types"
import { Chunk } from "../../types"
import { Sample } from "../types"

interface Metric {
    submetrics: Combination<Submetric>,
    sumOfSquares: SumOfSquares,
}

interface LocalMinimum extends Sample {
    sumOfSquares: SumOfSquares,
}

type ComputeBestMetricOptions = Partial<{
    bestMetric: Metric,
    chunkCount: Count<Chunk>,
    depth: number,
    localMinimum: LocalMinimum,
    progressMessage: string,
    recurse: boolean,
}>

type SumsOfSquares = Array<SumsOfSquares | SumOfSquares | undefined>

export {
    LocalMinimum,
    Metric,
    ComputeBestMetricOptions,
    SumsOfSquares,
}
