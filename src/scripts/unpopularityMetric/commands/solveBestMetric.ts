import * as colors from "colors"
import { program } from "commander"
import { Count } from "../../../general"
import { debug } from "../debug"
import { bestMetricsForChunkCount, Chunk, killedsForChunkCount, populateAndSearchScopes, status } from "../solver"
import { presentBestMetrics } from "../solver/present"
import { performance } from "perf_hooks"

program
    .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
    .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
    .option("-d, --debug", "debug")
    .option("-c, --no-color", "no color")
    .option("-t, --no-time", "no time")
    .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
status.upperBoundChunkCount = program.upperBoundChunkCount || 8
debug.all = !!program.debug
if (!program.color) {
    colors.disable()
}
const time = !!program.time

status.populatingChunkCount = lowerBoundChunkCount as Count<Chunk>
status.searchingChunkCount = lowerBoundChunkCount as Count<Chunk>

debug.solver = true
// debug.localMinima = true
// debug.newBestMetric = true
// debug.scope = true

const startTime = performance.now()
populateAndSearchScopes().then(() => {
    const bestMetricsForNonzeroChunkCounts = bestMetricsForChunkCount.slice(lowerBoundChunkCount, status.upperBoundChunkCount + 1)
    console.log(`\n\nAND THE BEST METRICS PER CHUNK COUNT WERE ${JSON.stringify(presentBestMetrics(bestMetricsForNonzeroChunkCounts), undefined, 4)}`.green)
    console.log(`\n\nAND THE KILLED METRIC COUNTS PER CHUNK COUNT WERE [${killedsForChunkCount.map(abandonedForChunkCount => abandonedForChunkCount.length).join(",")}]`.red)

    const endTime = performance.now()
    if (time) console.log(`\n\nTOOK ${endTime - startTime} MS`)
})
