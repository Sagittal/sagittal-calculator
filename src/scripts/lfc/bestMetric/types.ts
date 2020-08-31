import { Combination, Index, Io, Maybe, Resolution, Span, Sum } from "../../../general"
import { Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { DynamicParameter, Sample } from "./scopeToSamples"

type MetricName = string & { _MetricNameBrand: "MetricName" }

interface Metric {
    spreadDynamicParameters?: Parameter[],
    name: MetricName,
    submetrics: Combination<Submetric>,
    sumOfSquares?: SumOfSquares,
}

type ParameterScope = ParameterValue | boolean | DynamicParameterScope

type ParameterScopes = Partial<Record<Parameter, ParameterScope>>

type SubmetricScope = ParameterScopes & { _SubmetricScopeBrand: "SubmetricScope" }

type Scope = Combination<SubmetricScope>

type DynamicParameterScope = Partial<{
    center: ParameterValue,
    resolution: Resolution<ParameterValue>,
    span: Span<ParameterValue>,
}>

type SquaredWeightedRankDifferences =
    number
    & { _SquaredWeightedRankDifferencesBrand: "SquaredWeightedRankDifferences" }

type SumOfSquares = Sum<SquaredWeightedRankDifferences>

type SumsOfSquares = Array<Maybe<SumsOfSquares | SumOfSquares>>

type NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    indentation: Io,
    onlyWinners: boolean,
}>

interface ComputeSumOrSumsOfSquaresOptions extends NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions {
    spreadDynamicParameters?: Parameter[],
    metricName: MetricName,
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
    metricName: MetricName,
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
    MetricName,
    ParameterScopes,
}
