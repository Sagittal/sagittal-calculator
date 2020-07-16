import { Count } from "../../../../general"
import { debug } from "../../debug"
import { debugSearchedAndPopulated } from "../debug"
import { bestMetricsForChunkCount, scopesForChunkCount, status } from "../globals"
import { Chunk } from "../types"
import { searchPopulatedScopesForChunkCount } from "./populatedScopesForChunkCount"

const ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP = 1000

const searchScopes = async () => {
    const searchingChunkCount = status.searchingChunkCount
    if (debug.all || debug.solver) console.log(`\n\nPROCESSING CHUNK COUNT ${searchingChunkCount} (${status.finishedPopulating ? `finished populating` : `still populating chunk count ${status.populatingChunkCount}`}) ${debugSearchedAndPopulated()}`.yellow)

    while (scopesForChunkCount[ searchingChunkCount ] && scopesForChunkCount[ searchingChunkCount ].length > 0) {
        await searchPopulatedScopesForChunkCount()
    }

    const populatingHasMovedOnToTheNextChunkCount = status.populatingChunkCount > searchingChunkCount
    if (populatingHasMovedOnToTheNextChunkCount) {
        if (debug.all || debug.solver) console.log(`\n\nBEST METRIC FOR CHUNK COUNT ${searchingChunkCount} was ${JSON.stringify(bestMetricsForChunkCount[ searchingChunkCount ])}`.yellow)
        status.searchingChunkCount = searchingChunkCount + 1 as Count<Chunk>
    }

    return new Promise(async resolve => {
        if (searchingChunkCount <= status.upperBoundChunkCount && !status.finishedPopulating) {
            setTimeout(async () => {
                await searchScopes()
                resolve()
            }, populatingHasMovedOnToTheNextChunkCount ? 0 : ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP)
        } else {
            resolve()
        }
    })
}

export {
    searchScopes,
}
