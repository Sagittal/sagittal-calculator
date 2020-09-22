import { increment, Io, LogTarget, saveLog } from "../../../../general"
import {
    nonRecursiveSearchScopeAndMaybeUpdateBestMetric,
    nonRecursiveSearchScopeAndMaybeUpdateBestMetricSync,
    Scope,
} from "../../bestMetric"
import { scopesToSearch, solverStatus } from "../../globals"
import { formatPercentage, formatSearchedAndPopulated } from "../io"

const searchPopulatedScopes = async (): Promise<void> => {
    const scope = scopesToSearch.pop() as Scope
    if (!scope) {
        return
    }

    try {
        await nonRecursiveSearchScopeAndMaybeUpdateBestMetric(scope)
    } catch (e) {
        saveLog(`error when searching scope: ${e.message}` as Io, LogTarget.ERRORS)
    }

    solverStatus.searchedScopeCount = increment(solverStatus.searchedScopeCount)

    saveLog(`searched out of populated: ${formatPercentage(solverStatus.searchedScopeCount, solverStatus.populatedScopeCount)} ${formatSearchedAndPopulated()}` as Io, LogTarget.SEARCH)
}

const searchPopulatedScopesSync = (): void => {
    const scope = scopesToSearch.pop() as Scope
    if (!scope) {
        return
    }

    try {
        nonRecursiveSearchScopeAndMaybeUpdateBestMetricSync(scope)
    } catch (e) {
        saveLog(`error when searching scope: ${e.message}` as Io, LogTarget.ERRORS)
    }

    solverStatus.searchedScopeCount = increment(solverStatus.searchedScopeCount)

    saveLog(`searched out of populated: ${formatPercentage(solverStatus.searchedScopeCount, solverStatus.populatedScopeCount)} ${formatSearchedAndPopulated()}` as Io, LogTarget.SEARCH)
}

export {
    searchPopulatedScopes,
    searchPopulatedScopesSync,
}
