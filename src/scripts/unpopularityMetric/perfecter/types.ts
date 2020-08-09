import { ComputeSumOrSumsOfSquaresOptions, DynamicParameter, Sample, Scope, SumOfSquares } from "../bestMetric"

interface LocalMinimum extends Sample {
    sumOfSquares: SumOfSquares,
}

type RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    depth: number,
    localMinimum: LocalMinimum,
    metricId: string,
    onlyWinners: boolean,
}>

interface SearchLocalMinimumOptions extends ComputeSumOrSumsOfSquaresOptions {
    dynamicParameters: DynamicParameter[],
    scope: Scope,
    metricId: string,
    index: number,
    depth: number,
    nextLocalMinima: LocalMinimum[],
}

interface PerfectMetricOptions {
    metricId: string,
}

export {
    SearchLocalMinimumOptions,
    RecursiveSearchScopeAndMaybeUpdateBestMetricOptions,
    LocalMinimum,
    PerfectMetricOptions,
}
