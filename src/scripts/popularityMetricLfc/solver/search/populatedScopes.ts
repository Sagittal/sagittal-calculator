import { Count, Io, LogTarget, saveLog } from "../../../../general"
import { nonRecursiveSearchScopeAndMaybeUpdateBestMetric, Scope } from "../../bestMetric"
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
        saveLog(`error when searching scope: ${e.message}` as Io, LogTarget.ERRORS)
    }

    solverStatus.searchedScopeCount = solverStatus.searchedScopeCount + 1 as Count<Scope>

    saveLog(`searched out of populated: ${formatPercentage(solverStatus.searchedScopeCount, solverStatus.populatedScopeCount)} ${formatSearchedAndPopulated()}` as Io, LogTarget.SEARCH)
}

export {
    searchPopulatedScopes,
}
