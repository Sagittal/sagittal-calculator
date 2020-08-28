import { Count } from "../../../../general"
import { nonRecursiveSearchScopeAndMaybeUpdateBestMetric, Scope } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { scopesToSearch, solverStatus } from "../../globals"
import { formatPercentage, formatSearchedAndPopulated } from "../io"

const searchPopulatedScopes = async () => {
    const scope = scopesToSearch.pop() as Scope
    if (!scope) {
        return
    }

    try {
        await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope)
    } catch (e) {
        saveDebugMessage(`error when searching scope: ${e.message}`, DebugTarget.ERRORS)
    }

    solverStatus.searchedScopeCount = solverStatus.searchedScopeCount + 1 as Count<Scope>

    saveDebugMessage(`searched out of populated: ${formatPercentage(solverStatus.searchedScopeCount, solverStatus.populatedScopeCount)} ${formatSearchedAndPopulated()}`, DebugTarget.SEARCH)
}

export {
    searchPopulatedScopes,
}
