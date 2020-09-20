import { Integer } from "../../../general"
import { DynamicParameter, Sample, Scope, SumOfSquares, SumOrSumsOfSquaresOptions } from "../bestMetric"

type MetricTag = string & { _MetricTagBrand: boolean }

interface LocalMin extends Sample {
    sumOfSquares: SumOfSquares,
}

type RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    depth: Integer,
    localMin: LocalMin,
    metricTag: MetricTag,
    onlyWinners: boolean,
}>

interface SearchLocalMinOptions extends SumOrSumsOfSquaresOptions {
    dynamicParameters: DynamicParameter[],
    scope: Scope,
    metricTag: MetricTag,
    index: number,
    depth: Integer,
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
