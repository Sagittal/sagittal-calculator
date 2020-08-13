import { computeDynamicParameters, computeSamples, Sample } from "./scopeToSamples"
import { computeSpreadDynamicParameters } from "./spreadDynamicParameters"
import { NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions, Scope, SearchScopeResults } from "./types"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "./sumsOfSquares"
import { solverStatus } from "../globals"
import { Count } from "../../../general"

const nonRecursiveSearchScopeAndMaybeUpdateBestMetric = async (scope: Scope, options: NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {}): Promise<SearchScopeResults> => {
    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })
    const spreadDynamicParameters = computeSpreadDynamicParameters(scope)

    solverStatus.sampleCount = solverStatus.sampleCount + samples.length as Count<Sample>
    solverStatus.averageSamplesPerScope = Math.round(solverStatus.sampleCount / solverStatus.populatedScopeCount) as Count<Sample>

    saveDebugMessage(`about to search scope ${JSON.stringify(scope)}`, DebugTarget.SEARCH)
    saveDebugMessage(`which has ${samples.length} samples; average sample count is ${solverStatus.averageSamplesPerScope}`, DebugTarget.SEARCH)

    const sumsOfSquares = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, { spreadDynamicParameters, ...options })

    return { dynamicParameters, samples, sumsOfSquares }
}

export {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
}
