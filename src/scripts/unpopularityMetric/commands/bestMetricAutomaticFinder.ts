import "colors"
import { program } from "commander"
import { Count } from "../../../utilities/types"
import { status, bestMetricsForChunkCount } from "../automator/globals"
import { populateSampleConfigs } from "../automator/populate/sampleConfigs"
import { processSampleConfigs } from "../automator/process/sampleConfigs"
import { debugProcessedAndPopulated } from "../automator/debug"
import { Chunk } from "../automator/types"

program
    .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
    .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
    .option("-d, --debug", "debug")
    .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
status.upperBoundChunkCount = program.upperBoundChunkCount || 3
const debug = !!program.debug

status.populatingChunkCount = lowerBoundChunkCount as Count<Chunk>
status.processingChunkCount = lowerBoundChunkCount as Count<Chunk>

// TODO: I feel like the biggest issue now is that they may not still be as interwoven as possible:
//  populating and processing, that is.
//  I'm slightly concerned that once it gets to huge lists of sample configs,
//   we're going to get stuck on the populating step for too long.
//  I guess that's an important thing to consider though:
//   it doesn't really matter that much if we get stuck on the processing side;
//   the risk, really, is getting stuck in the populating side and ending up with a giant object.
//  However, if you put a console log right after the work it does in populateSampleConfigsForChunkCount,
//   it does seem to be interruptable in a good way, so that's a good sign.

populateSampleConfigs({ debug }).then(() => {
    console.log("\n\nFINISHED POPULATING".cyan)
    status.finishedPopulating = true
})
processSampleConfigs({ debug }).then(() => {
    console.log(`\n\nFINAL STATUS ${debugProcessedAndPopulated()}`.yellow)
    console.log(`\n\nAND THE BEST METRICS PER CHUNK COUNT WERE ${JSON.stringify(bestMetricsForChunkCount.slice(1, bestMetricsForChunkCount.length), undefined, 4)}`.red)
})
