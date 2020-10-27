import {Combination, Index, Io, Maybe, Name, Sum} from "../../../general"
import {DynamicParameterScope, ParameterValue} from "../../types"
import {Parameter, Submetric} from "../sumOfSquares"
import {DynamicParameter, Sample} from "./scopeToSamples"

interface Metric {
    spreadDynamicParameters?: Parameter[],
    name: Name<Metric>,
    submetrics: Combination<Submetric>,
    sumOfSquares?: SumOfSquares,
}

type ParameterScope = ParameterValue | boolean | DynamicParameterScope

type ParameterScopes = Partial<Record<Parameter, ParameterScope>>

type SubmetricScope = ParameterScopes & {_SubmetricScopeBrand: boolean}

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
    spreadDynamicParameters?: Parameter[],
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
    ParameterScopes,
    ParameterScope,
    ShouldUpdateBestMetricOptions,
}
