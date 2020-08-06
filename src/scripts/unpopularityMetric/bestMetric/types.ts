import { Combination, EnumHash, Resolution, Span, Sum } from "../../../general"
import { Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { DynamicParameter, Sample } from "./scopeToSamples"

interface Metric {
    submetrics: Combination<Submetric>,
    sumOfSquares: SumOfSquares | undefined,
}

type SubmetricScope = Partial<EnumHash<Parameter, ParameterValue | boolean | DynamicParameterScope>>

type Scope = Combination<SubmetricScope>

type DynamicParameterScope = Partial<{
    center: ParameterValue,
    resolution: Resolution<ParameterValue>,
    span: Span<ParameterValue>,
}>

interface LocalMinimum extends Sample {
    sumOfSquares: SumOfSquares,
}

interface TopLevelScopeTimer {
    timedOut: boolean
}

type SearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    depth: number,
    localMinimum: LocalMinimum,
    progressMessage: string,
    recurse: boolean,
    deterministic: boolean,
    timeoutEnabled: boolean,
    onlyWinners: boolean,
    topLevelScopeTimer: TopLevelScopeTimer, // todo lotta shared params in here!
    timer: NodeJS.Timeout,
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
    nextLocalMinima: LocalMinimum[],
    topLevelScopeTimer: TopLevelScopeTimer,
    onlyWinners: boolean,
    timer: NodeJS.Timeout,
}

type SumOfSquares = Sum<"SquaredWeightedRankDifferences">

type SumsOfSquares = Array<SumsOfSquares | SumOfSquares | undefined>

type ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions = Partial<{
    indentation: string,
    onlyWinners: boolean,
}>

interface ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions {
    indentation: string,
    sumsOfSquares: SumsOfSquares,
    index: number,
    onlyWinners: boolean,
}

export {
    LocalMinimum,
    SearchScopeAndMaybeUpdateBestMetricOptions,
    SumsOfSquares,
    SearchLocalMinimumOptions,
    ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions,
    Metric,
    Scope,
    SubmetricScope,
    DynamicParameterScope,
    SumOfSquares,
    ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions,
}
