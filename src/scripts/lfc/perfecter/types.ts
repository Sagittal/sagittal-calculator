import { Integer } from "../../../general"
import { ComputeSumOrSumsOfSquaresOptions, DynamicParameter, Sample, Scope, SumOfSquares } from "../bestMetric"

type MetricTag = string & { _MetricTagBrand: "MetricTag" }

interface LocalMin extends Sample {
    sumOfSquares: SumOfSquares,
}

type RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    depth: Integer,
    localMin: LocalMin,
    metricTag: MetricTag,
    onlyWinners: boolean,
}>

interface SearchLocalMinOptions extends ComputeSumOrSumsOfSquaresOptions {
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
