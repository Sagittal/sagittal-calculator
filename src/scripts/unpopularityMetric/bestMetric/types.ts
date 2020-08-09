import { Combination, Index, Resolution, Span, Sum } from "../../../general"
import { Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { DynamicParameter, Sample } from "./scopeToSamples"

interface Metric {
    spreadParameters?: Parameter[],
    submetrics: Combination<Submetric>,
    sumOfSquares: SumOfSquares | undefined,
}

type SubmetricScope = Partial<Record<Parameter, ParameterValue | boolean | DynamicParameterScope>>

type Scope = Combination<SubmetricScope>

type DynamicParameterScope = Partial<{
    center: ParameterValue,
    resolution: Resolution<ParameterValue>,
    span: Span<ParameterValue>,
}>

type SumOfSquares = Sum<"SquaredWeightedRankDifferences">

type SumsOfSquares = Array<SumsOfSquares | SumOfSquares | undefined>

type NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    indentation: string,
    onlyWinners: boolean,
}>

interface ComputeSumOrSumsOfSquaresOptions extends NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions {
    spreadParameters?: Parameter[],
}

type ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions = Partial<ComputeSumOrSumsOfSquaresOptions>

interface ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions extends ComputeSumOrSumsOfSquaresOptions {
    sumsOfSquares: SumsOfSquares,
    index: Index<Sample>,
}

interface SearchScopeResults {
    dynamicParameters: DynamicParameter[],
    sumsOfSquares: SumsOfSquares,
    samples: Sample[],
}

export {
    SumsOfSquares,
    ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions,
    Metric,
    Scope,
    SubmetricScope,
    DynamicParameterScope,
    SumOfSquares,
    ComputeSumOfSquaresAndMaybeUpdateBestMetricOptions,
    ComputeSumOrSumsOfSquaresOptions,
    SearchScopeResults,
    NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions,
}
