import { Scope, searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "../../bestMetric"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { populatedsForChunkCount, scopesForChunkCount, searchedsForChunkCount, solverStatus } from "../../globals"
import { presentPercentage, presentSearchedAndPopulated } from "../present"

const searchPopulatedScopesForChunkCount = async () => {
    const searchingChunkCount = solverStatus.searchingChunkCount
    const searchedForChunkCount = searchedsForChunkCount[ searchingChunkCount ]
    const searchingScopes = scopesForChunkCount[ searchingChunkCount ]
    const scopeForChunkCount = searchingScopes && searchingScopes.pop() as Scope

    if (searchedForChunkCount % 1 === 0) {
        saveDebugMessage(`searched out of populated for chunk count ${searchingChunkCount}: ${presentPercentage(searchedForChunkCount, populatedsForChunkCount[ searchingChunkCount ])} ${presentSearchedAndPopulated()}`, DebugTarget.SOLVER)
    }

    try {
        await searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(scopeForChunkCount, {
            recurse: false,
            timeoutEnabled: true,
            onlyWinners: true,
            chunkCount: searchingChunkCount,
        })
    } catch (e) {
        // TODO: Bad scopes are still being computed...
        //  it may not be a simple matter to not compute them in the first place,
        //  so for now, just don't worry about them
        //  but it might be a good idea to have a separate debugTargets key for metric errors
    }

    searchedsForChunkCount[ searchingChunkCount ] = searchedForChunkCount ?
        searchedForChunkCount + 1 :
        1
}

export {
    searchPopulatedScopesForChunkCount,
}
