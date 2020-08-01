import { Count } from "../../../../src/general"
import { cleanArray } from "../../../../src/general/code/cleanArray"
import {
    bestMetricsForChunkCount,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    populatedsForChunkCount,
    scopesForChunkCount,
    searchedsForChunkCount,
    solverStatus,
} from "../../../../src/scripts/unpopularityMetric/globals"
import { Chunk } from "../../../../src/scripts/unpopularityMetric/solver"

afterEach(() => {
    cleanArray(populatedsForChunkCount)
    cleanArray(searchedsForChunkCount)
    cleanArray(scopesForChunkCount)
    cleanArray(bestMetricsForChunkCount)
    cleanArray(memoizedSubmetricChunkCombinations)
    cleanArray(memoizedParameterChunkCombinations)

    solverStatus.finishedPopulating = false
    solverStatus.populatingChunkCount = 0 as Count<Chunk>
    solverStatus.upperBoundChunkCount = 0 as Count<Chunk>
    solverStatus.searchingChunkCount = 0 as Count<Chunk>
})
