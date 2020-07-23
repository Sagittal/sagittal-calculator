import * as colors from "colors"
import { program } from "commander"
import { Count } from "../../../general"
import { debug } from "../debug"
import { bestMetricsForChunkCount, Chunk, populateAndSearchScopes, status } from "../solver"

program
    .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
    .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
    .option("-d, --debug", "debug")
    .option("-n, --no-color", "no color")
    .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
status.upperBoundChunkCount = program.upperBoundChunkCount || 3
debug.all = !!program.debug
if (!!program.noColors) {
    colors.disable()
}

status.populatingChunkCount = lowerBoundChunkCount as Count<Chunk>
status.searchingChunkCount = lowerBoundChunkCount as Count<Chunk>

debug.solver = true

populateAndSearchScopes().then(() => {
    const bestMetricsForNonzeroChunkCounts = bestMetricsForChunkCount.slice(1, bestMetricsForChunkCount.length)
    console.log(`\n\nAND THE BEST METRICS PER CHUNK COUNT WERE ${JSON.stringify(bestMetricsForNonzeroChunkCounts, undefined, 4)}`.green)
})
