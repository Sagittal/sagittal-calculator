import * as colors from "colors"
import { program } from "commander"
import { performance } from "perf_hooks"
import { Count } from "../../../general"
import {
    clearDebugLogFiles,
    debugSettings,
    DebugTarget,
    debugTargets,
    saveDebugMessage,
    setDebugTargets,
} from "../debug"
import { bestMetricsForChunkCount, solverStatus, timeoutsForChunkCount } from "../globals"
import { Chunk, populateAndSearchScopes, presentBestMetrics } from "../solver"

program
    .option("-d, --debug-targets [debugTargets]", "debug targets")
    .option("-c, --no-color", "no color")
    .option("-w, --no-write", "no write")
    .option("-t, --no-time", "no time")
    .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
    .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
    .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
solverStatus.upperBoundChunkCount = program.upperBoundChunkCount || 8
setDebugTargets(program.debugTargets)
if (!program.color) {
    colors.disable()
}
const time = !!program.time
debugSettings.noWrite = !program.write

if (!debugSettings.noWrite) {
    clearDebugLogFiles()
}

solverStatus.populatingChunkCount = lowerBoundChunkCount as Count<Chunk>
solverStatus.searchingChunkCount = lowerBoundChunkCount as Count<Chunk>

debugTargets[ DebugTarget.SEARCH ] = true
debugTargets[ DebugTarget.POPULATE ] = true
// debugTargets[ DebugTarget.LOCAL_MINIMUM ] = true
// debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true
// debugTargets[ DebugTarget.SCOPE ] = true

const startTime = performance.now()
populateAndSearchScopes().then(() => {
    const bestMetricsForNonzeroChunkCounts = bestMetricsForChunkCount.slice(lowerBoundChunkCount, solverStatus.upperBoundChunkCount + 1)
    saveDebugMessage(`\n\nAND THE BEST METRICS PER CHUNK COUNT WERE ${JSON.stringify(presentBestMetrics(bestMetricsForNonzeroChunkCounts), undefined, 4)}`, DebugTarget.ALL)
    saveDebugMessage(`\n\nAND THE TIMED OUT METRIC COUNTS PER CHUNK COUNT WERE [${timeoutsForChunkCount.map(abandonedForChunkCount => abandonedForChunkCount.length).join(",")}]`, DebugTarget.ALL)

    const endTime = performance.now()
    if (time) saveDebugMessage(`\n\nTOOK ${endTime - startTime} MS`, DebugTarget.ALL)
})
