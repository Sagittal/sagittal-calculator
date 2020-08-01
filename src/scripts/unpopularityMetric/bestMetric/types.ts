import { Combination, Count, EnumHash, Resolution, Span, Sum } from "../../../general"
import { Chunk } from "../solver"
import { Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { DynamicParameter, Sample } from "./scopeToSamples"

interface Metric {
    submetrics: Combination<Submetric>,
    sumOfSquares: Sum<"SquaredWeightedRankDifferences"> | undefined,
}

type SubmetricScope = Partial<EnumHash<Parameter, ParameterValue | boolean | DynamicParameterScope>>

type Scope = Combination<SubmetricScope>

type DynamicParameterScope = Partial<{
    center: ParameterValue,
    resolution: Resolution<ParameterValue>,
    span: Span<ParameterValue>,
}>

interface LocalMinimum extends Sample {
    sumOfSquares: Sum<"SquaredWeightedRankDifferences">,
}

interface TopLevelScopeHasBeenKilled {
    hasBeenKilled: boolean
}

type SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = Partial<{
    chunkCount: Count<Chunk>,
    depth: number,
    localMinimum: LocalMinimum,
    progressMessage: string,
    recurse: boolean,
    deterministic: boolean,
    timeoutEnabled: boolean,
    onlyWinners: boolean,
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
    topLevelScopeHasBeenKilled: TopLevelScopeHasBeenKilled,
    onlyWinners: boolean,
}

type SumsOfSquares = Array<SumsOfSquares | Sum<"SquaredWeightedRankDifferences"> | undefined>

type ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions = Partial<{
    chunkCount: Count<Chunk>,
    indentation: string,
    topLevelScopeHasBeenKilled: TopLevelScopeHasBeenKilled,
    onlyWinners: boolean,
}>

export {
    LocalMinimum,
    SearchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions,
    SumsOfSquares,
    SearchLocalMinimumOptions,
    ComputeSumsOfSquaresAndPossiblyUpdateBestMetricForChunkCountAsSideEffectOptions,
    Metric,
    Scope,
    SubmetricScope,
    DynamicParameterScope,
}
