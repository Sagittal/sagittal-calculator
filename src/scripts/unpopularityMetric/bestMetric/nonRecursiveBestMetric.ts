import { computeDynamicParameters, computeSamples } from "./scopeToSamples"
import { computeSpreadDynamicParameters } from "./spreadDynamicParameters"
import { NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions, Scope, SearchScopeResults } from "./types"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "./sumsOfSquares"

let totalSamples = 0
let totalScopes = 0

const nonRecursiveSearchScopeAndMaybeUpdateBestMetric = (scope: Scope, options: NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {}) => {
    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })
    const spreadDynamicParameters = computeSpreadDynamicParameters(scope)

    totalSamples += samples.length
    totalScopes += 1
    saveDebugMessage(`about to search scope ${JSON.stringify(scope)}`, DebugTarget.SEARCH)
    saveDebugMessage(`which has ${samples.length} samples; average sample count is ${Math.round(totalSamples / totalScopes)}`, DebugTarget.SEARCH)

    const sumsOfSquares = computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { spreadDynamicParameters, ...options })

    return { dynamicParameters, samples, sumsOfSquares }
}

export {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
}
