import { debug } from "../../debug"
import { debugSearchedAndPopulated, presentPercentage } from "../debug"
import { populatedsForChunkCount, scopesForChunkCount, searchedsForChunkCount, status } from "../globals"
import { Scope } from "../types"
import { searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect } from "./bestMetric"

const searchPopulatedScopesForChunkCount = async () => {
    const searchingChunkCount = status.searchingChunkCount
    const searchedForChunkCount = searchedsForChunkCount[ searchingChunkCount ]
    const searchingScopes = scopesForChunkCount[ searchingChunkCount ]
    const scopeForChunkCount = searchingScopes && searchingScopes.pop() as Scope

    if (searchedForChunkCount % 1 === 0) {
        if (debug.all || debug.solver) {
            console.log(`searched out of populated for chunk count ${searchingChunkCount}: ${presentPercentage(searchedForChunkCount, populatedsForChunkCount[ searchingChunkCount ])} ${debugSearchedAndPopulated()}`.yellow)
        }
    }

    try {
        await searchScopeAndPossiblyUpdateBestMetricForChunkCountAsSideEffect(scopeForChunkCount, { recurse: false, chunkCount: searchingChunkCount })
    } catch (e) {
        // TODO: Bad scopes are still being computed...
        //  it may not be a simple matter to not compute them in the first place,
        //  so for now, just don't worry about them
        //  but it might be a good idea to have a separate debug key for metric errors
    }

    searchedsForChunkCount[ searchingChunkCount ] = searchedForChunkCount ?
        searchedForChunkCount + 1 :
        1
}

export {
    searchPopulatedScopesForChunkCount,
}
