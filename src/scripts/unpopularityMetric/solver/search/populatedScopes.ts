import { Scope, searchScopeAndMaybeUpdateBestMetric } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { scopesToSearch, solverStatus } from "../../globals"
import { presentPercentage, presentSearchedAndPopulated } from "../present"
import { Count } from "../../../../general"

const searchPopulatedScopes = async () => {
    const scope = scopesToSearch.pop() as Scope
    if (!scope) return

    try {
        await searchScopeAndMaybeUpdateBestMetric(scope, {
            recurse: false,
            timeoutEnabled: true,
            onlyWinners: true,
        })
    } catch (e) {
        // TODO: Bad scopes are still being computed...
        //  it may not be a simple matter to not compute them in the first place,
        //  so for now, just don't worry about them
        //  but it might be a good idea to have a separate debugTargets key for metric errors
    }

    solverStatus.searchedScopeCount = solverStatus.searchedScopeCount + 1 as Count<Scope>

    saveDebugMessage(`searched out of populated: ${presentPercentage(solverStatus.searchedScopeCount, solverStatus.populatedScopeCount)} ${presentSearchedAndPopulated()}`, DebugTarget.SEARCH)
}

export {
    searchPopulatedScopes,
}
