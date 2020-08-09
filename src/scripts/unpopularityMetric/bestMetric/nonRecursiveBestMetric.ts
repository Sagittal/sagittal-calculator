import { computeDynamicParameters, computeSamples } from "./scopeToSamples"
import { computeSpreadDynamicParameters } from "./spreadDynamicParameters"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "./sumsOfSquares"
import { NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions, Scope, SearchScopeResults } from "./types"

const nonRecursiveSearchScopeAndMaybeUpdateBestMetric = async (scope: Scope, options: NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {}): Promise<SearchScopeResults> => {
    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })
    const spreadDynamicParameters = computeSpreadDynamicParameters(scope)

    const sumsOfSquares = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { spreadDynamicParameters, ...options })

    return { dynamicParameters, samples, sumsOfSquares }
}

export {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
}
