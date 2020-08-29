import { Count } from "../../../../../src/general"
import { cleanArray } from "../../../../../src/general/code/cleanArray"
import { Sample, Scope } from "../../../../../src/scripts/lfc/bestMetric"
import { DEFAULT_MAX_UNIT, DEFAULT_ONLY_TOP, DEFAULT_Z } from "../../../../../src/scripts/lfc/constants"
import {
    bestMetrics,
    lfcSettings,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    metricNames,
    scopesToSearch,
    solverStatus,
} from "../../../../../src/scripts/lfc/globals"
import { Chunk } from "../../../../../src/scripts/lfc/solver"

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

    lfcSettings.z = DEFAULT_Z
    lfcSettings.onlyTop = DEFAULT_ONLY_TOP
    lfcSettings.maxUnit = DEFAULT_MAX_UNIT
    lfcSettings.noUseless = false
})
