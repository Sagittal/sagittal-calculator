import { computeDynamicParameters, computeSamples } from "./scopeToSamples"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "./sumsOfSquares"
import { ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions, Scope, SearchScopeResults } from "./types"

const nonRecursiveSearchScopeAndMaybeUpdateBestMetric = async (scope: Scope, options: ComputeSumsOfSquaresAndMaybeUpdateBestMetricOptions = {}): Promise<SearchScopeResults> => {
    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })

    const sumsOfSquares = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, options)

    return { dynamicParameters, samples, sumsOfSquares }
}

export {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
}
