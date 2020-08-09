import { computeDynamicParameters, computeSamples } from "./scopeToSamples"
import { computeSpreadParameters } from "./spreadParameters"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "./sumsOfSquares"
import { NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions, Scope, SearchScopeResults } from "./types"

const nonRecursiveSearchScopeAndMaybeUpdateBestMetric = async (scope: Scope, options: NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {}): Promise<SearchScopeResults> => {
    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })
    const spreadParameters = computeSpreadParameters(scope)

    const sumsOfSquares = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { spreadParameters, ...options })

    return { dynamicParameters, samples, sumsOfSquares }
}

export {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
}
