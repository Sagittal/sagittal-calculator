import { ComputeSumOrSumsOfSquaresOptions, DynamicParameter, Sample, Scope, SumOfSquares } from "../bestMetric"

interface LocalMin extends Sample {
    sumOfSquares: SumOfSquares,
}

type RecursiveSearchScopeAndMaybeUpdateBestMetricOptions = Partial<{
    depth: number,
    localMin: LocalMin,
    metricId: string,
    onlyWinners: boolean,
}>

interface SearchLocalMinOptions extends ComputeSumOrSumsOfSquaresOptions {
    dynamicParameters: DynamicParameter[],
    scope: Scope,
    metricId: string,
    index: number,
    depth: number,
    nextLocalMinima: LocalMin[],
}

interface PerfectMetricOptions {
    metricId: string,
}

export {
    SearchLocalMinOptions,
    RecursiveSearchScopeAndMaybeUpdateBestMetricOptions,
    LocalMin,
    PerfectMetricOptions,
}
