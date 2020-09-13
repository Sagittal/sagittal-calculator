import { cleanArray } from "../../../../../src/general/code/cleanArray"
import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import {
    INITIAL_POPULARITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS,
    INITIAL_SOLVER_STATUS,
} from "../../../../../src/scripts/popularityMetricLfc/constants"
import {
    bestMetrics,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    metricNames,
    popularityMetricLfcScriptGroupSettings,
    scopesToSearch,
    solverStatus,
} from "../../../../../src/scripts/popularityMetricLfc/globals"

afterEach((): void => {
    cleanArray(scopesToSearch)
    cleanArray(memoizedSubmetricChunkCombinations)
    cleanArray(memoizedParameterChunkCombinations)
    cleanArray(metricNames)
    bestMetrics.clear()

    setAllPropertiesOfObjectOnAnother({ objectToChange: solverStatus, objectWithProperties: INITIAL_SOLVER_STATUS })
    setAllPropertiesOfObjectOnAnother({
        objectToChange: popularityMetricLfcScriptGroupSettings,
        objectWithProperties: INITIAL_POPULARITY_METRIC_LFC_SCRIPT_GROUP_SETTINGS,
    })
})
