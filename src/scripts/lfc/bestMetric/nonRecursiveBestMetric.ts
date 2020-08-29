import { Count, IO, LogTarget, round, saveLog } from "../../../general"
import { LFC } from "../constants"
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
        saveLog(errorMessage as IO, LogTarget.ERRORS, LFC)
        throw new Error(errorMessage)
    }
    metricNames.push(metricName)

    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({ scope, dynamicParameters })
    const spreadDynamicParameters = computeSpreadDynamicParameters(scope)

    solverStatus.sampleCount = solverStatus.sampleCount + samples.length as Count<Sample>
    solverStatus.averageSamplesPerScope =
        round(solverStatus.sampleCount / solverStatus.populatedScopeCount) as Count<Sample>

    saveLog(`about to search initial scope for metric ${metricName}` as IO, LogTarget.SEARCH, LFC)
    saveLog(
        `which has ${samples.length} samples; average sample count is ${solverStatus.averageSamplesPerScope}` as IO,
        LogTarget.SEARCH,
        LFC,
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