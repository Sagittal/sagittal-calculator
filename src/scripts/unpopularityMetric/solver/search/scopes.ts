import { Count, doOnNextEventLoop } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { bestMetricsForChunkCount, scopesForChunkCount, solverStatus } from "../../globals"
import { presentSearchedAndPopulated } from "../present"
import { Chunk } from "../types"
import { searchPopulatedScopesForChunkCount } from "./populatedScopesForChunkCount"

const ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP = 1000

const searchScopes = async () => {
    const searchingChunkCount = solverStatus.searchingChunkCount

    while (scopesForChunkCount[ searchingChunkCount ] && scopesForChunkCount[ searchingChunkCount ].length > 0) {
        await doOnNextEventLoop(searchPopulatedScopesForChunkCount)
    }

    const populatingHasMovedOnToTheNextChunkCount = solverStatus.populatingChunkCount > searchingChunkCount
    if (populatingHasMovedOnToTheNextChunkCount) {
        saveDebugMessage(`\n\nBEST METRICS FOR CHUNK COUNT ${searchingChunkCount} were ${JSON.stringify(bestMetricsForChunkCount[ searchingChunkCount ], undefined, 4)}`, DebugTarget.SOLVER)
        solverStatus.searchingChunkCount = searchingChunkCount + 1 as Count<Chunk>
    }

    if (searchingChunkCount <= solverStatus.upperBoundChunkCount && !solverStatus.finishedPopulating) {
        saveDebugMessage(`searching got ahead of populating; waiting 1 second for more scopes to be populated for ${searchingChunkCount} ${presentSearchedAndPopulated()}`, DebugTarget.SOLVER)

        const timeout = populatingHasMovedOnToTheNextChunkCount ? 0 : ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP

        return doOnNextEventLoop(searchScopes, timeout)
    } else {
        return
    }
}

export {
    searchScopes,
}
