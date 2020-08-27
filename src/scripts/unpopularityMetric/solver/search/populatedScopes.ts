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
        // TODO: bad scopes are still being computed...
        //  it may not be a simple matter to not compute them in the first place,
        //  so for now, just don't worry about them
        //  but it might be a good idea to have a separate debugTargets key for metric errors
        //  or maybe to have a logging statement of target errors here at least
    }

    solverStatus.searchedScopeCount = solverStatus.searchedScopeCount + 1 as Count<Scope>

    saveDebugMessage(`searched out of populated: ${formatPercentage(solverStatus.searchedScopeCount, solverStatus.populatedScopeCount)} ${formatSearchedAndPopulated()}`, DebugTarget.SEARCH)
}

export {
    searchPopulatedScopes,
}
