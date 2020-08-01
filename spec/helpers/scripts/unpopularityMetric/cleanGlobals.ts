import { cleanArray } from "../../../../src/general/code/cleanArray"
import {
    bestMetricsForChunkCount,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    populatedsForChunkCount,
    scopesForChunkCount,
    searchedsForChunkCount,
    status,
} from "../../../../src/scripts/unpopularityMetric/solver/globals"
import { Chunk } from "../../../../src/scripts/unpopularityMetric/solver"
import { Count } from "../../../../src/general"

afterEach(() => {
    cleanArray(populatedsForChunkCount)
    cleanArray(searchedsForChunkCount)
    cleanArray(scopesForChunkCount)
    cleanArray(bestMetricsForChunkCount)
    cleanArray(memoizedSubmetricChunkCombinations)
    cleanArray(memoizedParameterChunkCombinations)

    status.finishedPopulating = false
    status.populatingChunkCount = 0 as Count<Chunk>
    status.upperBoundChunkCount = 0 as Count<Chunk>
    status.searchingChunkCount = 0 as Count<Chunk>
})
