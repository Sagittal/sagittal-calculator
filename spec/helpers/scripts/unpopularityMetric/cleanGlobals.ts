import { Count, Unit } from "../../../../src/general"
import { cleanArray } from "../../../../src/general/code/cleanArray"
import { cleanObject } from "../../../../src/general/code/cleanObject"
import { Scope } from "../../../../src/scripts/unpopularityMetric/bestMetric"
import {
    bestMetrics,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    scopesToSearch,
    solverStatus,
} from "../../../../src/scripts/unpopularityMetric/globals"
import { ParameterValue } from "../../../../src/scripts/unpopularityMetric/sumOfSquares"

afterEach(() => {
    cleanArray(scopesToSearch)
    cleanObject(bestMetrics)
    cleanArray(memoizedSubmetricChunkCombinations)
    cleanArray(memoizedParameterChunkCombinations)

    solverStatus.finishedPopulating = false
    solverStatus.populatedScopeCount = 0 as Count<Scope>
    solverStatus.searchedScopeCount = 0 as Count<Scope>
})
