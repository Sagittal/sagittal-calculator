import { Count, Io, LogTarget, round, saveLog } from "../../../general"
import { LFC_SCRIPT_GROUP } from "../constants"
import { metricNames, solverStatus } from "../globals"
import { computeMetricName } from "./metricName"
import { computeDynamicParameters, computeSamples, Sample } from "./scopeToSamples"
import { computeSpreadDynamicParameters } from "./spreadDynamicParameters"
import { computeSumsOfSquaresAndMaybeUpdateBestMetric } from "./sumsOfSquares"
import { NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions, Scope, SearchScopeResults } from "./types"

const nonRecursiveSearchScopeAndMaybeUpdateBestMetric = async (
    scope: Scope,
    options: NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
): Promise<SearchScopeResults> => {
    const metricName = computeMetricName(scope)
    if (metricNames.includes(metricName)) {
        const errorMessage = `Already searched equivalent initial scope for ${metricName}`
        saveLog(errorMessage as Io, LogTarget.ERRORS, LFC_SCRIPT_GROUP)
        throw new Error(errorMessage)
    }
    metricNames.push(metricName)

    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })
    const spreadDynamicParameters = computeSpreadDynamicParameters(scope)

    solverStatus.sampleCount = solverStatus.sampleCount + samples.length as Count<Sample>
    solverStatus.averageSamplesPerScope =
        round(solverStatus.sampleCount / solverStatus.populatedScopeCount) as Count<Sample>

    saveLog(`about to search initial scope for metric ${metricName}` as Io, LogTarget.SEARCH, LFC_SCRIPT_GROUP)
    saveLog(
        `which has ${samples.length} samples; average sample count is ${solverStatus.averageSamplesPerScope}` as Io,
        LogTarget.SEARCH,
        LFC_SCRIPT_GROUP,
    )

    const sumsOfSquares = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, {
        spreadDynamicParameters,
        metricName, ...options,
    })

    return { dynamicParameters, samples, sumsOfSquares, metricName }
}

export {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
}
