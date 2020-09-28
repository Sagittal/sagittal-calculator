import { IntegerDecimal } from "../../../general"
import { DynamicParameter, Sample, Scope, SumOfSquares, SumOrSumsOfSquaresOptions } from "../bestMetric"

type MetricTag = string & { _MetricTagBrand: boolean }

interface LocalMin extends Sample {
    sumOfSquares: SumOfSquares,
}

type RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    depth: IntegerDecimal,
    localMin: LocalMin,
    metricTag: MetricTag,
    onlyBetterThanSopfgtt: boolean,
}>

interface SearchLocalMinOptions extends SumOrSumsOfSquaresOptions {
    dynamicParameters: DynamicParameter[],
    scope: Scope,
    metricTag: MetricTag,
    index: number,
    depth: IntegerDecimal,
    nextLocalMinima: LocalMin[],
}

interface PerfectMetricOptions {
    metricTag: MetricTag,
}

export {
    SearchLocalMinOptions,
    RecursiveSearchScopeAndMaybeUpdateBestMetricOptions,
    LocalMin,
    PerfectMetricOptions,
    MetricTag,
}
