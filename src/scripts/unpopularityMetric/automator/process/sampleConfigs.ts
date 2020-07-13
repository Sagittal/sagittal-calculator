import { bestMetricsForChunkCount, sampleConfigsForChunkCount, status } from "../globals"
import { Count } from "../../../../utilities/types"
import { debugProcessedAndPopulated } from "../debug"
import { Chunk } from "../types"
import { processPopulatedSampleConfigsForChunkCount } from "./populatedSampleConfigsForChunkCount"

const ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP = 1000

const processSampleConfigs = async ({ debug }: { debug: boolean }) => {
    const processingChunkCount = status.processingChunkCount
    console.log(`\n\nPROCESSING CHUNK COUNT ${processingChunkCount} (still populating chunk count ${status.populatingChunkCount}) ${debugProcessedAndPopulated()}`.yellow)

    while (sampleConfigsForChunkCount[ processingChunkCount ].length > 0) {
        await processPopulatedSampleConfigsForChunkCount({ debug })
    }

    const populatingHasMovedOnToTheNextChunkCount = status.populatingChunkCount > processingChunkCount
    if (populatingHasMovedOnToTheNextChunkCount) {
        console.log(`\n\nBEST METRIC FOR CHUNK COUNT ${processingChunkCount} was ${JSON.stringify(bestMetricsForChunkCount[ processingChunkCount ])}`.yellow)
        status.processingChunkCount = processingChunkCount + 1 as Count<Chunk>
    }

    return new Promise(async resolve => {
        if (processingChunkCount <= status.upperBoundChunkCount && !status.finishedPopulating) {
            setTimeout(async () => {
                await processSampleConfigs({ debug })
                resolve()
            }, populatingHasMovedOnToTheNextChunkCount ? 0: ONE_SECOND_TO_GIVE_POPULATION_A_CHANCE_TO_CATCH_UP)
        } else {
            resolve()
        }
    })
}

export {
    processSampleConfigs,
}
