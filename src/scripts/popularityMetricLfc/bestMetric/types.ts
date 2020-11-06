import {Combination, Index, Io, Maybe, Name, ParameterScopes, Sum} from "../../../general"
import {PopularityParameterId, Submetric} from "../sumOfSquares"
import {DynamicParameter, Sample} from "./scopeToSamples"

interface Metric {
    spreadDynamicParameters?: PopularityParameterId[],
    name: Name<Metric>,
    submetrics: Combination<Submetric>,
    sumOfSquares?: SumOfSquares,
}

type SubmetricScope = ParameterScopes<PopularityParameterId> & {_SubmetricScopeBrand: boolean}

type Scope = Combination<SubmetricScope>

type SquaredWeightedRankDifferences =
    number
    & {_SquaredWeightedRankDifferencesBrand: boolean}

type SumOfSquares = Sum<SquaredWeightedRankDifferences>

type SumsOfSquares = Array<Maybe<SumsOfSquares | SumOfSquares>>

type NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    indentation: Io,
    onlyBetterThanSopfgtt: boolean,
}>

interface SumOrSumsOfSquaresOptions extends NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions {
    spreadDynamicParameters?: PopularityParameterId[],
    metricName: Name<Metric>,
}

type SumsOfSquaresAndMaybeUpdateBestMetricOptions = Partial<SumOrSumsOfSquaresOptions>

interface SumOfSquaresAndMaybeUpdateBestMetricOptions extends SumOrSumsOfSquaresOptions {
    sumsOfSquares: SumsOfSquares,
    index: Index<Sample>,
}

interface SearchScopeResults {
    dynamicParameters: DynamicParameter[],
    sumsOfSquares: SumsOfSquares,
    samples: Sample[],
    metricName: Name<Metric>,
}

type ShouldUpdateBestMetricOptions = Partial<{
    bestMetric: Metric,
    sumOfSquares: SumOfSquares,
    onlyBetterThanSopfgtt: boolean,
}>

export {
    SumsOfSquares,
    SumsOfSquaresAndMaybeUpdateBestMetricOptions,
    Metric,
    Scope,
    SubmetricScope,
    SumOfSquares,
    SumOfSquaresAndMaybeUpdateBestMetricOptions,
    SumOrSumsOfSquaresOptions,
    SearchScopeResults,
    NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions,
    ShouldUpdateBestMetricOptions,
}
