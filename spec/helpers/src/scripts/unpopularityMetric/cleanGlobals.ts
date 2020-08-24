import { Count } from "../../../../../src/general"
import { cleanArray } from "../../../../../src/general/code/cleanArray"
import { Sample, Scope } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { DEFAULT_MAXIMUM_UNIT, DEFAULT_ONLY_TOP, DEFAULT_Z } from "../../../../../src/scripts/unpopularityMetric/constants"
import {
    bestMetrics,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    metricNames,
    scopesToSearch,
    solverStatus,
    unpopularityMetricSettings,
} from "../../../../../src/scripts/unpopularityMetric/globals"
import { Chunk } from "../../../../../src/scripts/unpopularityMetric/solver"

afterEach(() => {
    cleanArray(scopesToSearch)
    cleanArray(memoizedSubmetricChunkCombinations)
    cleanArray(memoizedParameterChunkCombinations)
    cleanArray(metricNames)
    bestMetrics.clear()

    solverStatus.finishedPopulating = false
    solverStatus.populatedScopeCount = 0 as Count<Scope>
    solverStatus.searchedScopeCount = 0 as Count<Scope>
    solverStatus.chunkCount = 0 as Count<Chunk>
    solverStatus.averageSamplesPerScope = 0 as Count<Sample>
    solverStatus.sampleCount = 0 as Count<Sample>

    unpopularityMetricSettings.z = DEFAULT_Z
    unpopularityMetricSettings.onlyTop = DEFAULT_ONLY_TOP
    unpopularityMetricSettings.maximumUnit = DEFAULT_MAXIMUM_UNIT
    unpopularityMetricSettings.noUseless = false
})
