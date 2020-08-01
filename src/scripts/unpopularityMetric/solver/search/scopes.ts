import { Count, doOnNextEventLoop } from "../../../../general"
import { saveLog } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { bestMetricsForChunkCount, scopesForChunkCount, status } from "../globals"
import { Chunk } from "../types"
import { searchPopulatedScopesForChunkCount } from "./populatedScopesForChunkCount"
import { DebugTarget } from "../../types"

const ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP = 1000

const searchScopes = async () => {
    const searchingChunkCount = status.searchingChunkCount

    while (scopesForChunkCount[ searchingChunkCount ] && scopesForChunkCount[ searchingChunkCount ].length > 0) {
        await doOnNextEventLoop(searchPopulatedScopesForChunkCount)
    }

    const populatingHasMovedOnToTheNextChunkCount = status.populatingChunkCount > searchingChunkCount
    if (populatingHasMovedOnToTheNextChunkCount) {
        saveLog(`\n\nBEST METRICS FOR CHUNK COUNT ${searchingChunkCount} were ${JSON.stringify(bestMetricsForChunkCount[ searchingChunkCount ], undefined, 4)}`, DebugTarget.SOLVER)
        status.searchingChunkCount = searchingChunkCount + 1 as Count<Chunk>
    }

    if (searchingChunkCount <= status.upperBoundChunkCount && !status.finishedPopulating) {
        saveLog(`searching got ahead of populating; waiting 1 second for more scopes to be populated for ${searchingChunkCount} ${debugSearchedAndPopulated()}`, DebugTarget.SOLVER)

        const timeout = populatingHasMovedOnToTheNextChunkCount ? 0 : ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP

        return doOnNextEventLoop(searchScopes, timeout)
    } else {
        return
    }
}

export {
    searchScopes,
}
