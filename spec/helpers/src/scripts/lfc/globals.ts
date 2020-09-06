import { cleanArray } from "../../../../../src/general/code/cleanArray"
import { setAllPropertiesOfObjectOnAnother } from "../../../../../src/general/code/setAllPropertiesOfObjectOnAnother"
import { INITIAL_LFC_SCRIPT_GROUP_SETTINGS, INITIAL_SOLVER_STATUS } from "../../../../../src/scripts/lfc/constants"
import {
    bestMetrics,
    lfcScriptGroupSettings,
    memoizedParameterChunkCombinations,
    memoizedSubmetricChunkCombinations,
    metricNames,
    scopesToSearch,
    solverStatus,
} from "../../../../../src/scripts/lfc/globals"

afterEach(() => {
    cleanArray(scopesToSearch)
    cleanArray(memoizedSubmetricChunkCombinations)
    cleanArray(memoizedParameterChunkCombinations)
    cleanArray(metricNames)
    bestMetrics.clear()

    setAllPropertiesOfObjectOnAnother({ objectToChange: solverStatus, objectWithProperties: INITIAL_SOLVER_STATUS })
    setAllPropertiesOfObjectOnAnother({
        objectToChange: lfcScriptGroupSettings,
        objectWithProperties: INITIAL_LFC_SCRIPT_GROUP_SETTINGS,
    })
})
