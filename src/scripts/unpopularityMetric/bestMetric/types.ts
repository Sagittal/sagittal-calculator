import { Combination, EnumHash, Index, Resolution, Span, Sum } from "../../../general"
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

type SumOfSquares = Sum<"SquaredWeightedRankDifferences">

type SumsOfSquares = Array<SumsOfSquares | SumOfSquares | undefined>

interface ComputeSumOrSumsOfSquaresOptions {
    indentation: string,
    onlyWinners: boolean,
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
}
