import { bestMetricsForChunkCount, scopesForChunkCount, status } from "../globals"
import { Count } from "../../../../utilities/types"
import { debugSearchedAndPopulated } from "../debug"
import { Chunk } from "../types"
import { searchPopulatedScopesForChunkCount } from "./populatedScopesForChunkCount"

const ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP = 1000

const searchScopes = async ({ debug }: { debug: boolean }) => {
    const searchingChunkCount = status.searchingChunkCount
    console.log(`\n\nPROCESSING CHUNK COUNT ${searchingChunkCount} (still populating chunk count ${status.populatingChunkCount}) ${debugSearchedAndPopulated()}`.yellow)

    while (scopesForChunkCount[ searchingChunkCount ].length > 0) {
        await searchPopulatedScopesForChunkCount({ debug })
    }

    const populatingHasMovedOnToTheNextChunkCount = status.populatingChunkCount > searchingChunkCount
    if (populatingHasMovedOnToTheNextChunkCount) {
        console.log(`\n\nBEST METRIC FOR CHUNK COUNT ${searchingChunkCount} was ${JSON.stringify(bestMetricsForChunkCount[ searchingChunkCount ])}`.yellow)
        status.searchingChunkCount = searchingChunkCount + 1 as Count<Chunk>
    }

    return new Promise(async resolve => {
        if (searchingChunkCount <= status.upperBoundChunkCount && !status.finishedPopulating) {
            setTimeout(async () => {
                await searchScopes({ debug })
                resolve()
            }, populatingHasMovedOnToTheNextChunkCount ? 0: ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP)
        } else {
            resolve()
        }
    })
}

export {
    searchScopes,
}
