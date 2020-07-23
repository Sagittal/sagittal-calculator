import { Combination, Count, Sum } from "../../../../../general"
import { Submetric } from "../../../types"
import { Chunk, Scope } from "../../types"
import { DynamicParameter } from "../scopeToSamples"
import { Sample } from "../types"

interface Metric {
    submetrics: Combination<Submetric>,
    sumOfSquares: Sum<"SquaredWeightedRankDifferences">,
}

interface LocalMinimum extends Sample {
    sumOfSquares: Sum<"SquaredWeightedRankDifferences">,
}

type SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = Partial<{
    chunkCount: Count<Chunk>,
    depth: number,
    localMinimum: LocalMinimum,
    progressMessage: string,
    recurse: boolean,
}>

type SearchLocalMinimumOptions = {
    dynamicParameters: DynamicParameter[],
    scope: Scope,
    progressMessage: string,
    index: number,
    indentation: string,
    nextDepth: number,
    recurse: boolean,
    localMinimum?: LocalMinimum,
    chunkCount: Count<Chunk>,
    nextLocalMinima: LocalMinimum[],
}

type SumsOfSquares = Array<SumsOfSquares | Sum<"SquaredWeightedRankDifferences"> | undefined>

type ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = Partial<{
    chunkCount: Count<Chunk>,
    indentation: string,
}>

export {
    LocalMinimum,
    Metric,
    SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions,
    SumsOfSquares,
    SearchLocalMinimumOptions,
    ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions,
}
