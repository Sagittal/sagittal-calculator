import { Count } from "../../../../general"
import { doOnNextEventLoop } from "../../../../general/code/doOnNextEventLoop"
import { debug } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { bestMetricsForChunkCount, scopesForChunkCount, status } from "../globals"
import { Chunk } from "../types"
import { searchPopulatedScopesForChunkCount } from "./populatedScopesForChunkCount"

const ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP = 1000

const searchScopes = async () => {
    const searchingChunkCount = status.searchingChunkCount

    while (scopesForChunkCount[ searchingChunkCount ] && scopesForChunkCount[ searchingChunkCount ].length > 0) {
        await doOnNextEventLoop(searchPopulatedScopesForChunkCount)
    }

    const populatingHasMovedOnToTheNextChunkCount = status.populatingChunkCount > searchingChunkCount
    if (populatingHasMovedOnToTheNextChunkCount) {
        if (debug.all || debug.solver) {
            console.log(`\n\nBEST METRIC FOR CHUNK COUNT ${searchingChunkCount} was ${JSON.stringify(bestMetricsForChunkCount[ searchingChunkCount ])}`.yellow)
        }
        status.searchingChunkCount = searchingChunkCount + 1 as Count<Chunk>
    }

    if (searchingChunkCount <= status.upperBoundChunkCount && !status.finishedPopulating) {
        if (debug.all || debug.solver) {
            console.log(`searching got ahead of populating; waiting 1 second for more scopes to be populated for ${searchingChunkCount} ${debugSearchedAndPopulated()}`.yellow)
        }

        const timeout = populatingHasMovedOnToTheNextChunkCount ? 0 : ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP

        return doOnNextEventLoop(searchScopes, timeout)
    } else {
        return
    }
}

export {
    searchScopes,
}
