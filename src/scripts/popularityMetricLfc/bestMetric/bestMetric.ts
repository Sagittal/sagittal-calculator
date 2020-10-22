import {add, count, Count, Io, LogTarget, Maybe, Mean, MeanType, Name, round, saveLog} from "../../../general"
import {metricNames, solverStatus} from "../globals"
import {Parameter} from "../sumOfSquares"
import {computeMetricName} from "./metricName"
import {computeDynamicParameters, computeSamples, DynamicParameter, Sample} from "./scopeToSamples"
import {computeSpreadDynamicParameters} from "./spreadDynamicParameters"
import {
    computeSumsOfSquaresAndMaybeUpdateBestMetric,
    computeSumsOfSquaresAndMaybeUpdateBestMetricSync,
} from "./sumsOfSquares"
import {Metric, NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions, Scope, SearchScopeResults} from "./types"

const setupForNonRecursiveSearch = (
    scope: Scope,
): {
    dynamicParameters: DynamicParameter[],
    samples: Sample[],
    spreadDynamicParameters: Maybe<Parameter[]>,
    metricName: Name<Metric>
} => {
    const metricName = computeMetricName(scope)
    if (metricNames.includes(metricName)) {
        const errorMessage = `Already searched equivalent initial scope for ${metricName}`
        saveLog(errorMessage, LogTarget.ERROR)
        throw new Error(errorMessage)
    }
    metricNames.push(metricName)

    const dynamicParameters = computeDynamicParameters(scope)
    const samples = computeSamples({scope, dynamicParameters})
    const spreadDynamicParameters = computeSpreadDynamicParameters(scope)

    solverStatus.sampleCount = add(solverStatus.sampleCount, count(samples))
    solverStatus.averageSamplesPerScope = round(
        solverStatus.sampleCount / solverStatus.populatedScopeCount,
    ) as Mean<{of: Count<Sample>, meanType: MeanType.ARITHMETIC}>

    saveLog(`about to search initial scope for metric ${metricName}`, LogTarget.PROGRESS)
    saveLog(
        `which has ${samples.length} samples; average sample count is ${solverStatus.averageSamplesPerScope}` as Io,
        LogTarget.PROGRESS,
    )

    return {dynamicParameters, samples, spreadDynamicParameters, metricName}
}

const nonRecursiveSearchScopeAndMaybeUpdateBestMetric = async (
    scope: Scope,
    options: NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
): Promise<SearchScopeResults> => {
    const {dynamicParameters, samples, spreadDynamicParameters, metricName} = setupForNonRecursiveSearch(scope)

    const sumsOfSquares = await computeSumsOfSquaresAndMaybeUpdateBestMetric(samples, {
        spreadDynamicParameters,
        metricName,
        ...options,
    })

    return {dynamicParameters, samples, sumsOfSquares, metricName}
}

const nonRecursiveSearchScopeAndMaybeUpdateBestMetricSync = (
    scope: Scope,
    options: NonRecursiveSearchScopeAndMaybeUpdateBestMetricOptions = {},
): SearchScopeResults => {
    const {dynamicParameters, samples, spreadDynamicParameters, metricName} = setupForNonRecursiveSearch(scope)

    const sumsOfSquares = computeSumsOfSquaresAndMaybeUpdateBestMetricSync(samples, {
        spreadDynamicParameters,
        metricName,
        ...options,
    })

    return {dynamicParameters, samples, sumsOfSquares, metricName}
}

export {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
    nonRecursiveSearchScopeAndMaybeUpdateBestMetricSync,
}
