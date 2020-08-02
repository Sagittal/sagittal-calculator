import * as colors from "colors"
import { program } from "commander"
import { performance } from "perf_hooks"
import { Count } from "../../../general"
import { clearDebugLogFiles, debugSettings, DebugTarget, debugTargets, saveDebugMessage } from "../debug"
import { bestMetricsForChunkCount, killedsForChunkCount, solverStatus } from "../globals"
import { Chunk, populateAndSearchScopes, presentBestMetrics } from "../solver"

program
    .option("-l, --lower-bound-chunk-count <lowerBoundChunkCount>", "lower bound chunk count", parseInt)
    .option("-u, --upper-bound-chunk-count <upperBoundChunkCount>", "upper bound chunk count", parseInt)
    .option("-d, --debugTargets", "debug")
    .option("-c, --no-color", "no color")
    .option("-t, --no-time", "no time")
    .option("-w, --no-write", "no write")
    .parse(process.argv)

const lowerBoundChunkCount = program.lowerBoundChunkCount || 1
solverStatus.upperBoundChunkCount = program.upperBoundChunkCount || 8
debugTargets[ DebugTarget.ALL ] = !!program.debug
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

debugTargets[ DebugTarget.SOLVER ] = true
debugTargets[ DebugTarget.POPULATION ] = true
// debugTargets[ DebugTarget.LOCAL_MINIMUM ] = true
// debugTargets[ DebugTarget.NEW_BEST_METRIC ] = true
// debugTargets[ DebugTarget.SCOPE ] = true

const startTime = performance.now()
populateAndSearchScopes().then(() => {
    const bestMetricsForNonzeroChunkCounts = bestMetricsForChunkCount.slice(lowerBoundChunkCount, solverStatus.upperBoundChunkCount + 1)
    saveDebugMessage(`\n\nAND THE BEST METRICS PER CHUNK COUNT WERE ${JSON.stringify(presentBestMetrics(bestMetricsForNonzeroChunkCounts), undefined, 4)}`, DebugTarget.ALL)
    saveDebugMessage(`\n\nAND THE KILLED METRIC COUNTS PER CHUNK COUNT WERE [${killedsForChunkCount.map(abandonedForChunkCount => abandonedForChunkCount.length).join(",")}]`, DebugTarget.ALL)

    const endTime = performance.now()
    if (time) console.log(`\n\nTOOK ${endTime - startTime} MS`)
})
